<script setup lang="ts">
import collapse from './collapse.vue'
import refresh from './refresh.vue'
import userInfo from './user-info.vue'
import fullScreen from './full-screen.vue'
import search from './search.vue'
import theme from './theme.vue'
import lock from './lock.vue'

</script>

<template>
  <div class="top-bar flex flex-justify-between items-center h-full bg-primary text-white px-20 transition-all-3">
    <div class="flex items-center">
      <collapse />
      <refresh />
    </div>
    <div>
      <search />
    </div>
    <div class="flex items-center">
      <theme />
      <full-screen />
      <lock />
      <user-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  height: $top-bar-height;
}
</style>
