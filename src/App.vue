<template>
  <div class="outer-wrapper">
    <div class="container">
      <HeaderNav />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue';
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

.content {
  flex: 1 1 auto;
  overflow: auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .container {
    height: auto;
    min-height: 90vh;
  }
}
</style>
