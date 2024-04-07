<script setup lang="ts">
import { ElTooltip } from 'element-plus'
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit } = useFullscreen()

const tooltipRef = ref<InstanceType<typeof ElTooltip>>()
watch(isFullscreen, ()=> {
  tooltipRef.value?.hide()
})
</script>

<template>
  <div class="flex items-center !w-20 h-20 mx-10">
    <el-tooltip ref="tooltipRef" :content="isFullscreen ? '退出全屏' : '全屏'" placement="bottom">
      <i v-if="!isFullscreen" @click="enter" class="iconfont icon-quanping hand !text-20" />
      <i v-if="isFullscreen" @click="exit" class="iconfont icon-tuichuquanping hand !text-17" />
    </el-tooltip>
  </div>
</template>
