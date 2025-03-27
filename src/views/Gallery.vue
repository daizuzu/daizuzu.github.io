<template>
  <div class="gallery-page">
    <h1>作品集</h1>
    <p>以下是我近期的一些作品示例：</p>

    <div class="gallery-grid">
      <GalleryItem
          v-for="(img, idx) in images"
          :key="idx"
          :img="img"
          @enlarge="handleEnlarge"
      />
    </div>

    <!-- 放大预览弹窗 -->
    <Lightbox
        v-if="showLightbox"
        :img="selectedImage"
        @close="showLightbox = false"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import { images } from '../assets/images.js'; // 你的图片数据数组
import GalleryItem from '../components/GalleryItem.vue';
import Lightbox from '../components/Lightbox.vue';

export default {
  name: 'Gallery',
  components: {
    GalleryItem,
    Lightbox
  },
  setup() {
    const showLightbox = ref(false);
    const selectedImage = ref(null);

    const handleEnlarge = (img) => {
      selectedImage.value = img;
      showLightbox.value = true;
    };

    return {
      images,
      showLightbox,
      selectedImage,
      handleEnlarge
    };
  }
};
</script>

<style scoped>
.gallery-page {
  padding: 2rem;
}
.gallery-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  margin-top: 2rem;
}
</style>
