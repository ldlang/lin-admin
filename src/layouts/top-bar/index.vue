<script setup lang="ts">
const collapse = defineAsyncComponent(()=> import('./collapse.vue'))
const refresh = defineAsyncComponent(()=> import('./refresh.vue'))
const userInfo = defineAsyncComponent(()=> import('./user-info.vue'))
const fullScreen = defineAsyncComponent(()=> import('./full-screen.vue'))
const search = defineAsyncComponent(()=> import('./search.vue'))
const theme = defineAsyncComponent(()=> import('./theme.vue'))
const lock = defineAsyncComponent(()=> import('./lock.vue'))
const setting = defineAsyncComponent(()=> import('./setting.vue'))

</script>

<template>
  <div class="top-bar flex flex-justify-between items-center h-full text-#606266 px-20 transition-all-3
  b-(b b-solid b-#eee)">
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
      <setting />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  height: $top-bar-height;
}
</style>
