<script setup lang="ts">
const screen = ref(false)
const onFullScreenClick = ()=> {
  screen.value = !!document.fullscreenElement
  if (!screen.value) {
    // 全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
</script>

<template>
  <div class="flex items-center text-20 pr-20">
    <el-tooltip content="全屏" placement="bottom">
      <el-icon @click="onFullScreenClick" class="cursor-pointer">
        <FullScreen />
      </el-icon>
    </el-tooltip>
  </div>
</template>
