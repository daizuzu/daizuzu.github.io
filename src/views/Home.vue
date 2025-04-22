<template>
  <div class="home">
    <SlotMachine />
  </div>
</template>

<script>
import SlotMachine from '@/components/SlotMachine.vue'

export default {
  name: 'Home',
  components: { SlotMachine },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
}
</style>
