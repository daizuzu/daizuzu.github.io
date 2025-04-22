<template>
  <div class="slot-machine">
    <div class="slot-wrapper">
      <!-- column 1 -->
      <div class="slot-column column-1">
        <div
            ref="list1"
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex1 * itemHeightPx}px)` }"
        >
          <div
              v-for="(item, index) in text1Options"
              :key="index"
              class="slot-item"
              :class="{ active: index === selectedIndex1 }"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <!-- static label -->
      <div class="static-label">‑ is ‑</div>

      <!-- column 2 -->
      <div class="slot-column column-2">
        <div
            ref="list2"
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex2 * itemHeightPx}px)` }"
        >
          <div
              v-for="(item, index) in text2Options"
              :key="index"
              class="slot-item"
              :class="{ active: index === selectedIndex2 }"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <!-- static label -->
      <div class="static-label">‑</div>

      <!-- column 3 -->
      <div class="slot-column column-3">
        <div
            ref="list3"
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex3 * itemHeightPx}px)` }"
        >
          <div
              v-for="(item, index) in text3Options"
              :key="index"
              class="slot-item"
              :class="{ active: index === selectedIndex3 }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <el-button
        type="info"
        plain
        :style="{ marginTop: '1em', fontFamily: 'Monaco', cursor: 'pointer' }"
        @click="rollSlots"
    >
      perform critique
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SlotMachine',
  data() {
    return {
      text1Options: ['art', 'code', 'design', 'music'],
      text2Options: ['brilliant', 'floppy', 'bold', 'subtle'],
      text3Options: ['!', '?'],
      selectedIndex1: 0,
      selectedIndex2: 0,
      selectedIndex3: 0,
      scaleFactor: 1,
      itemHeightPx: 0,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    rollSlots() {
      this.selectedIndex1 = Math.floor(Math.random() * this.text1Options.length);
      this.selectedIndex2 = Math.floor(Math.random() * this.text2Options.length);
      this.selectedIndex3 = Math.floor(Math.random() * this.text3Options.length);
    },
    handleResize() {
      this.scaleFactor = window.innerWidth / 1440;
      document.documentElement.style.setProperty('--scale', this.scaleFactor);
      this.$nextTick(() => {
        const firstItem = this.$el.querySelector('.slot-item');
        if (firstItem) this.itemHeightPx = firstItem.getBoundingClientRect().height;
      });
    },
  },
};
</script>

<style scoped>
:root { --scale: 1; }

.slot-machine {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* -------- desktop / 默认横向 -------- */
.slot-wrapper {
  display: flex;
  align-items: center;
  font-size: clamp(0.875rem, calc(3rem * var(--scale)), 3rem);
  line-height: clamp(1rem,   calc(3.6rem * var(--scale)), 3.6rem);
  height:     clamp(1rem,   calc(3.6rem * var(--scale)), 3.6rem);
  gap:        clamp(0.25rem, calc(1rem * var(--scale)), 1rem);
  font-family: 'Fira Code', monospace;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.slot-column {
  height: clamp(1rem, calc(3.6rem * var(--scale)), 3.6rem);
  overflow: hidden;
  position: relative;
}

.column-1 { width: clamp(4rem,  calc(12rem * var(--scale)), 12rem); }
.column-2 { width: clamp(6rem,  calc(18rem * var(--scale)), 18rem);
  border-left: 1px solid #999;
  border-right: 1px solid #999; }
.column-3 { width: clamp(1rem,  calc(3rem  * var(--scale)), 3rem);
  border-top:    1px solid #999;
  border-bottom: 1px solid #999; }

.slot-list {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease;
}

.slot-item {
  height: clamp(1rem, calc(3.6rem * var(--scale)), 3.6rem);
  line-height: inherit;
  text-align: center;
  color: gray;
  transition: color 0.3s ease;
}

.slot-item.active { color: black; }

.static-label {
  font-size: clamp(0.875rem, calc(3rem * var(--scale)), 3rem);
}

/* -------- mobile ≤600px：纵向 -------- */
@media (max-width: 600px) {
  .slot-wrapper {
    flex-direction: column;
    align-items: center;
    height: auto;          /* 纵向不再需要固定高度 */
    gap: 0.5rem;
  }

  .slot-column,
  .static-label {
    width: 100%;
    text-align: center;
  }

  .column-1,
  .column-2,
  .column-3 { width: 100%; }

  /* 调整边框方向，避免侧边竖线 */
  .column-2 {
    border-left: none;
    border-right: none;
    border-top:    1px solid #999;
    border-bottom: 1px solid #999;
  }
  .column-3 { border: none; }
}
</style>
