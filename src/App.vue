<template>
  <div class="outer-wrapper">
    <div class="container">
      <nav class="header">
        <template v-for="(item, index) in navItems" :key="item.to">
          <router-link :to="item.to">{{ item.label }}</router-link>
          <span v-if="index < navItems.length - 1" class="divider">|</span>
        </template>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/project', label: 'Project' },
  { to: '/illustration', label: 'Illustration' },
  { to: '/virtual_exhibition', label: 'Virtual Exhibition' },
  { to: '/art_practices', label: 'Art Practices' },
  { to: '/about', label: 'About' }
];
</script>

<style scoped>
.outer-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 960px;
  height: 90vh;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 12px;
}


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

.divider {
  color: #bbb;
}

.content {
  flex: 1 1 auto;
  overflow: auto;
  padding: 20px;
}

/* 响应式调整 */
@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    gap: 6px;
  }

  .container {
    height: auto;
    min-height: 80vh;
  }
}
</style>
