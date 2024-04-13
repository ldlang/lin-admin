<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

function darkModeClick() {
  toggleDark()
}
</script>

<template>
  <div class="dark-mode w-45 h-20 flex justify-between items-center rd-50 relative transition-all-300"
    @click="darkModeClick"
    :class="[isDark ? 'bg-black' : 'bg-white' ]">
    <div class="absolute w-18 h-18 rd-50 top-1 transition-all-300"
      :class="[isDark ? 'left-1 bg-white' : 'left-26 bg-yellow']" />
    <i class="iconfont icon-taiyang text-yellow ml-2" />
    <i class="iconfont icon-yueliang text-yellow text-13 mr-2" />
  </div>
</template>
