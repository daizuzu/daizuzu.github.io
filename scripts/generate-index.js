// /scripts/generate-index.js
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = path.resolve('public', 'assets');
const SUPPORTED = ['.jpg', '.jpeg', '.png', '.txt'];

function walk(dir, routePrefix) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    const result = [];

    for (const item of items) {
        if (item.name === 'index.json') continue;          // 跳过旧索引
        const abs = path.join(dir, item.name);
        const rel = path.join(routePrefix, item.name);     // 用于 URL
        if (item.isDirectory()) {
            const sub = walk(abs, rel);
            // 递归完后若子目录内资源不为空，同时写入该子目录 index.json
            if (sub.length) {
                const indexPath = path.join(abs, 'index.json');
                fs.writeFileSync(indexPath, JSON.stringify(sub, null, 2));
            }
            result.push(...sub);
        } else if (item.isFile()) {
            const ext = path.extname(item.name).toLowerCase();
            if (!SUPPORTED.includes(ext)) continue;

            if (ext === '.txt') {
                const content = fs.readFileSync(abs, 'utf8');
                result.push({ type: 'text', content });
            } else {
                // 处理图片
                result.push({ type: 'image', url: `/assets/${rel.replace(/\\/g, '/')}` });
            }
        }
    }
    return result;
}

fs.readdirSync(ASSETS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .forEach(pageDir => {
        const pagePath = path.join(ASSETS_DIR, pageDir.name);
        const list = walk(pagePath, pageDir.name);
        if (list.length) {
            fs.writeFileSync(
                path.join(pagePath, 'index.json'),
                JSON.stringify(list, null, 2)
            );
            console.log(`✔  index.json generated for ${pageDir.name}`);
        }
    });
