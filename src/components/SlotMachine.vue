<template>
  <div class="slot-machine">
    <div class="slot-wrapper">
      <div class="slot-column column-1">
        <div
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex1 * itemHeight * scaleFactor}rem)` }"
        >
          <div
              v-for="(item, index) in text1Options"
              :key="index"
              :class="['slot-item', { active: index === selectedIndex1 }]"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="static-label">- is -</div>

      <div class="slot-column column-2">
        <div
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex2 * itemHeight * scaleFactor}rem)` }"
        >
          <div
              v-for="(item, index) in text2Options"
              :key="index"
              :class="['slot-item', { active: index === selectedIndex2 }]"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="static-label">-</div>

      <div class="slot-column column-3">
        <div
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex3 * itemHeight * scaleFactor}rem)` }"
        >
          <div
              v-for="(item, index) in text3Options"
              :key="index"
              :class="['slot-item', { active: index === selectedIndex3 }]"
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
      itemHeight: 3.6, // 单位为 rem
      scaleFactor: 1,  // 缩放因子，基于屏幕宽度计算
    }
  },
  mounted() {
    this.updateScale();
    window.addEventListener('resize', this.updateScale);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScale);
  },
  methods: {
    rollSlots() {
      this.selectedIndex1 = Math.floor(Math.random() * this.text1Options.length);
      this.selectedIndex2 = Math.floor(Math.random() * this.text2Options.length);
      this.selectedIndex3 = Math.floor(Math.random() * this.text3Options.length);
    },
    updateScale() {
      // 假设设计稿基准宽度为1440px，根据当前屏幕宽度计算缩放因子
      this.scaleFactor = window.innerWidth / 1440;
      document.documentElement.style.setProperty('--scale', this.scaleFactor);
    },
  },
}
</script>

<style scoped>
:root {
  /* 定义一个 CSS 变量 --scale，默认值为1；在组件加载后会根据屏幕宽度更新 */
  --scale: 1;
}

.slot-machine {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slot-wrapper {
  display: flex;
  align-items: center;
  /* 使用 clamp() 限制字体大小、行高与容器高度在一定范围内 */
  font-size: clamp(1rem, calc(3rem * var(--scale)), 3rem);
  line-height: clamp(1.2rem, calc(3.6rem * var(--scale)), 3.6rem);
  height: clamp(1.2rem, calc(3.6rem * var(--scale)), 3.6rem);
  overflow: hidden;
  gap: clamp(0.5rem, calc(1rem * var(--scale)), 1rem);
  font-family: 'Fira Code', monospace;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
}

.slot-column {
  height: clamp(1.2rem, calc(3.6rem * var(--scale)), 3.6rem);
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

.column-1 {
  width: clamp(6rem, calc(12rem * var(--scale)), 12rem);
}

.column-2 {
  width: clamp(8rem, calc(18rem * var(--scale)), 18rem);
  border-radius: clamp(0.25rem, calc(0.5rem * var(--scale)), 0.5rem);
  border-top: none;
  border-bottom: none;
  border-left: clamp(1px, calc(2px * var(--scale)), 2px) solid #999;
  border-right: clamp(1px, calc(2px * var(--scale)), 2px) solid #999;
}

.column-3 {
  width: clamp(1.5rem, calc(3rem * var(--scale)), 3rem);
  border-top: clamp(1px, calc(2px * var(--scale)), 2px) solid #999;
  border-bottom: clamp(1px, calc(2px * var(--scale)), 2px) solid #999;
  border-left: none;
  border-right: none;
}

.slot-list {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease;
}

.slot-item {
  height: clamp(1.2rem, calc(3.6rem * var(--scale)), 3.6rem);
  line-height: clamp(1.2rem, calc(3.6rem * var(--scale)), 3.6rem);
  text-align: center;
  color: gray;
  transition: color 0.3s ease;
}

.slot-item.active {
  color: black;
}

.static-label {
  font-size: clamp(1rem, calc(3rem * var(--scale)), 3rem);
}
</style>
