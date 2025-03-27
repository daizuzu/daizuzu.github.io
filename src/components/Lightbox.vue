<template>
  <div class="lightbox-backdrop" @click.self="closeLightbox">
    <div class="lightbox-content">
      <button class="close-btn" @click="closeLightbox">关闭</button>
      <img :src="img.fullsize" :alt="img.title" />
      <p>{{ img.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    img: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    closeLightbox() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.lightbox-content {
  background: #fff;
  padding: 1rem;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
}
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.lightbox-content img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
</style>
