<script setup lang="ts">
import userInfo from './user-info.vue'
import fullScreen from './full-screen.vue'

</script>

<template>
  <div class="flex flex-justify-between w-full h-full top-bar">
    <div>左</div>
    <div class="flex items-center">
      <full-screen />
      <user-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  background: $top-bar-main-color;
}
</style>
