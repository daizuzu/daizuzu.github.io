<template>
  <div class="gallery-page">
    <h1>作品集</h1>
    <p>下列均为纯色占位图片，点击任一项可原地放大</p>

    <div class="gallery-grid">
      <GalleryItem
          v-for="(img, idx) in images"
          :key="idx"
          :img="img"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { images } from '@/assets/images.js';
import GalleryItem from '@/components/GalleryItem.vue';

export default {
  name: 'Gallery',
  components: {
    GalleryItem
  },
  setup() {
    const data = ref(images);
    return {
      images: data
    };
  }
};
</script>

<style scoped>
.gallery-page {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
