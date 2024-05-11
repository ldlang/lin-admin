<script setup lang="ts">
const isDark = ref(false)
function darkModeClick() {
  isDark.value = !isDark.value
  // 获取html根节点，当根节点上有class=‘dark’时，变为暗黑模式
  const html = document.documentElement
  // 判断HTML标签是否有类名dark
  // 当按钮为关闭时，设置根节点的className为'',当暗黑模式按钮开启时，根节点的className设置为'dark'
  isDark.value ? html.className = 'dark' : html.className = ''
}
</script>

<template>
  <div class="dark-mode hand w-45 h-20 flex justify-between items-center rd-50 relative transition-all-300"
    @click="darkModeClick"
    :class="[isDark ? 'bg-black' : 'bg-white' ]">
    <div class="absolute w-18 h-18 rd-50 top-1 transition-all-300"
      :class="[isDark ? 'left-1 bg-white' : 'left-26 bg-yellow']" />
    <i class="iconfont icon-taiyang text-yellow ml-2" />
    <i class="iconfont icon-yueliang text-yellow text-13 mr-2" />
  </div>
</template>
