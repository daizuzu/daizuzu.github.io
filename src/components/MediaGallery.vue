<template>
  <div class="gallery">
    <template v-for="(item, idx) in media" :key="idx">
      <img
          v-if="item.type === 'image'"
          :src="item.url"
          class="gallery-img"
          :class="{ expanded: expandedSet.has(idx) }"
          @click="toggle(idx)"
          loading="lazy"
          :style="expandedSet.has(idx) ? expandedStyle : null"
      />

      <p v-else class="gallery-text">{{ item.content }}</p>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  folderName:          { type: String, required: true },
  maxExpandedWidth:    { type: [String, Number], default: '100%'  },
  maxExpandedHeight:   { type: [String, Number], default: '80vh'  },
});

const media       = ref([]);
const expandedSet = ref(new Set());

function toggle(idx) {
  if (expandedSet.value.has(idx)) {
    expandedSet.value.delete(idx);
  } else {
    expandedSet.value.add(idx);
  }
  // 触发 Vue 响应式系统重新计算
  expandedSet.value = new Set(expandedSet.value);
}

const expandedStyle = computed(() => ({
  maxWidth : typeof props.maxExpandedWidth  === 'number'
      ? `${props.maxExpandedWidth}px`
      : props.maxExpandedWidth,
  maxHeight: typeof props.maxExpandedHeight === 'number'
      ? `${props.maxExpandedHeight}px`
      : props.maxExpandedHeight,
}));

onMounted(async () => {
  try {
    const res = await fetch(`/assets/${props.folderName}/index.json`);
    if (!res.ok) throw new Error('fetch failed');
    media.value = await res.json();
  } catch (e) {
    console.error('MediaGallery:', e);
  }
});
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.gallery-img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.25s ease;
}

/* 展开时额外样式 */
.gallery-img.expanded {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  z-index: 1;
}

.gallery-text {
  width: 100%;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 4px 0 12px;
}
</style>
