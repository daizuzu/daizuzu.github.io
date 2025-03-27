<template>
  <!-- 容器，用 :class="{ enlarged: isEnlarged }" 控制放大/缩小 -->
  <div class="gallery-item" :class="{ enlarged: isEnlarged }" @click="toggleEnlarge">
    <div class="img-wrapper">
      <!-- 如果有真实图就用 <img>，否则用 <div> -->
      <template v-if="img.thumbnail">
        <img :src="img.thumbnail" :alt="img.title" />
      </template>
      <template v-else>
        <div class="color-block" :style="{ backgroundColor: img.color || '#ccc' }">
          暂无图片
        </div>
      </template>
    </div>

    <p class="title">{{ img.title }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'GalleryItem',
  props: {
    img: {
      type: Object,
      required: true
    }
  },
  setup() {
    const isEnlarged = ref(false);

    const toggleEnlarge = () => {
      isEnlarged.value = !isEnlarged.value;
    };

    return {
      isEnlarged,
      toggleEnlarge
    };
  }
};
</script>

<style scoped>
.gallery-item {
  width: 150px;
  transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  overflow: hidden; /* 防止放大时溢出 */
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

/* 点击放大后 */
.gallery-item.enlarged {
  width: 300px;
  z-index: 10;
}

.img-wrapper {
  width: 100%;
  aspect-ratio: 1; /* 使其保持正方形，现代浏览器支持 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 如果是有真实图，可以再写 img { width: 100%; height: 100%; object-fit: cover; } */
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #999;
  font-weight: bold;
  color: #666;
}

/* 标题 */
.title {
  margin: 0.5rem;
}
</style>
