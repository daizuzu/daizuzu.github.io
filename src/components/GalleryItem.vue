<template>
  <div class="gallery-item" @click="handleClick">
    <img :src="img.thumbnail" :alt="img.title" />
    <p>{{ img.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    img: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('enlarge', this.img);
    }
  }
};
</script>

<style scoped>
.gallery-item {
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}
.gallery-item:hover {
  transform: scale(1.05);
}
.gallery-item img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}
</style>
