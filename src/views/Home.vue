<template>
  <div class="home">
    <div class="slot-wrapper">
      <div class="slot-column column-1">
        <div
            class="slot-list"
            :style="{ transform: `translateY(-${selectedIndex1 * itemHeight}rem)` }"
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
            :style="{ transform: `translateY(-${selectedIndex2 * itemHeight}rem)` }"
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
            :style="{ transform: `translateY(-${selectedIndex3 * itemHeight}rem)` }"
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
  name: 'Home',
  data() {
    return {
      text1Options: ['art', 'code', 'design', 'music'],
      text2Options: ['brilliant', 'floppy', 'bold', 'subtle'],
      text3Options: ['!', '?'],
      selectedIndex1: 0,
      selectedIndex2: 0,
      selectedIndex3: 0,
      itemHeight: 3.6,
    };
  },
  methods: {
    rollSlots() {
      this.selectedIndex1 = Math.floor(Math.random() * this.text1Options.length);
      this.selectedIndex2 = Math.floor(Math.random() * this.text2Options.length);
      this.selectedIndex3 = Math.floor(Math.random() * this.text3Options.length);
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
}

.slot-wrapper {
  display: flex;
  align-items: center;
  font-size: 3rem;
  line-height: 3.6rem;
  height: 3.6rem;
  overflow: hidden;
  gap: 1rem;
  font-family: 'Fira Code', monospace;
}

.slot-column {
  height: 3.6rem;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

/* Custom width & border for each column */
.column-1 {
  width: 12rem;
}

.column-2 {
  width: 18rem;
  border-radius: 0.5rem;
  border-top: none;
  border-bottom: none;
  border-left: 2px solid #999;
  border-right: 2px solid #999;
}

.column-3 {
  width: 3rem;
  border-top: 2px solid #999;;
  border-bottom: 2px solid #999;;
  border-left: none;
  border-right: none;
}

.slot-list {
  display: flex;
  flex-direction: column;
  transition: transform 0.6s ease;
}

.slot-item {
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  color: gray;
  transition: color 0.3s ease;
}

.slot-item.active {
  color: black;
}

.static-label {
  font-size: 3rem;
}
</style>
