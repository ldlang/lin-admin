<script setup lang="ts">
import collapse from './collapse.vue'
import userInfo from './user-info.vue'
import fullScreen from './full-screen.vue'
import search from './search.vue'

</script>

<template>
  <div class="flex flex-justify-between items-center w-full h-full bg-primary text-white px-20 transition-all-3">
    <div class="flex items-center">
      <collapse />
    </div>
    <div>
      <search />
    </div>
    <div class="flex items-center">
      <full-screen />
      <user-info />
    </div>
  </div>
</template>
