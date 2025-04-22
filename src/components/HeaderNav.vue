<template>
  <nav :class="isMobile ? 'mobile-header' : 'header'">
    <!-- 桌面版导航 -->
    <template v-if="!isMobile">
      <template v-for="(item, index) in navItems" :key="item.to">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </template>
    </template>
    <!-- 移动端导航 -->
    <template style="position: relative;" v-else>
      <!-- 固定在左侧边的打开按钮 -->
      <div class="mobile-open-btn" @click="toggleDrawer">
        <el-icon>
          <DArrowRight />
        </el-icon>
      </div>
      <el-drawer
          v-model="isDrawerOpen"
          direction="ltr"
          size="250px"
          custom-class="mobile-drawer"
          :with-header="false"
      >
        <div class="drawer-content">
          <ul class="drawer-menu">
            <li v-for="(item, index) in navItems" :key="item.to" @click="closeDrawer">
              <router-link :to="item.to">{{ item.label }}</router-link>
              <hr v-if="index < navItems.length - 1" class="divider-hr"/>
            </li>
          </ul>
          <!-- 抽屉右侧边的收起按钮 -->
          <div class="drawer-close-btn" @click="closeDrawer">
            <el-icon>
              <DArrowLeft/>
            </el-icon>
          </div>
        </div>
      </el-drawer>
    </template>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ElDrawer, ElIcon } from 'element-plus'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/project', label: 'Project' },
  { to: '/illustration', label: 'Illustration' },
  { to: '/virtual_exhibition', label: 'Virtual Exhibition' },
  { to: '/art_practices', label: 'Art Practices' },
  { to: '/about', label: 'About' }
];

const isDrawerOpen = ref(false);
// 使用 768px 作为移动端的判断条件
const isMobile = ref(window.innerWidth <= 768);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* 桌面版的 header 样式 */
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 18px;
}

.header a {
  text-decoration: none;
  color: #333;
}

.header a:hover {
  color: #000;
  text-decoration: underline;
}

.mobile-header {
  padding: 0;
  border: none;
  background: none;
}

.mobile-open-btn {
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2000;
}

.mobile-drawer {
  padding: 0;
}

.drawer-content {
  position: relative;
  height: 100%;
}

.drawer-menu {
  list-style: none;
  padding: 20px 10px;
  margin: 0;
  font-family: 'Fira Code', monospace;
}

.drawer-menu li {
  text-align: center;
  padding: 15px 0;
}

.drawer-menu li a {
  text-decoration: none;
  color: #333;
  display: block;
}

.divider-hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 0;
}

/* 抽屉内右侧边的收起按钮 */
.drawer-close-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

/* 当屏幕宽度大于 768px 时隐藏移动端相关元素 */
@media (min-width: 769px) {
  .mobile-open-btn,
  .mobile-drawer {
    display: none;
  }
}
</style>
