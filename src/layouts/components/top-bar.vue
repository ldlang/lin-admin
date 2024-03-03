<script setup lang="ts">

const onFullScreenClick = ()=> {
  const screen = document.fullscreenElement
  if (!screen) {
  // 全屏
    document.documentElement.requestFullscreen()
  } else {
  // 退出全屏
    document.exitFullscreen()
  }
}

</script>

<template>
  <div class="flex justify-between w-full bg-gray-400 h-full px-5 py-1.25">
    <div>左</div>
    <div class="flex items-center">
      <el-tooltip content="全屏" class="px-1" placement="bottom">
        <el-icon @click="onFullScreenClick" class="cursor-pointer">
          <FullScreen />
        </el-icon>
      </el-tooltip>
    </div>
  </div>
</template>
