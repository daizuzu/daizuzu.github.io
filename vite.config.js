import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import path from 'path'

// 构建后自动复制 index.html 为 404.html
function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle: () => {
      const indexPath = path.resolve(__dirname, 'dist/index.html')
      const notFoundPath = path.resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log('✅ 404.html 已生成')
      }
    }
  }
}

export default defineConfig({
  base: '/', // 你就是部署到根目录，这里保持不变
  plugins: [vue(), copyIndexTo404()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
