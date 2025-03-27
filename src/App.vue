<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/gallery">作品集</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* 这里也可以写一些针对App的样式 */
</style>
