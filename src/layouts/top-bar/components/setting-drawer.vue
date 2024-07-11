<script setup lang="ts">
const darkMode = defineAsyncComponent(()=> import('./dark-mode.vue'))
import { ELayoutMode } from '../../type'
import { useCommonStore } from '@/store'
const { layoutMode } = storeToRefs(useCommonStore())
const show = ref(false)

const open = ()=> {
  show.value = true
}
const close = ()=> {
  show.value = false
}

defineExpose({
  open,
  close
})

// 设置菜单模式
function changeLayoutModeClick(mode: ELayoutMode) {
  layoutMode.value = mode
}

</script>

<template>
  <el-drawer
    title="系统设置"
    v-model="show"
    size="35%">
    <!-- <div class="flex justify-center text-15">
      <span class="mr-10">暗黑</span>
      <dark-mode />
      <span class="ml-10">明亮</span>
    </div> -->
    <section class="mt-10">
      <h5 class="my-10">排版方式</h5>
      <div class="flex">
        <!-- 左侧菜单 -->
        <el-tooltip content="左侧菜单" placement="bottom">
          <div @click="changeLayoutModeClick(ELayoutMode.vertical)"
            class="flex w-50 h-30 rd-3 overflow-hidden hand layout-shadow"
            :class="{'b-(2 solid primary)': layoutMode === ELayoutMode.vertical}">
            <div class="w-15 h-full bg-black" />
            <div class="w-35 h-full flex flex-col">
              <div class="h-10 w-full bg-fff b-(b-1 b-solid b-ddd)" />
              <div class="h-full w-full bg-f4" />
            </div>
          </div>
        </el-tooltip>

        <!-- 顶部菜单 -->
        <el-tooltip content="顶部菜单" placement="bottom">
          <div @click="changeLayoutModeClick(ELayoutMode.horizontal)"
            class="flex flex-col mx-20 w-50 h-30 rd-3 overflow-hidden hand layout-shadow"
            :class="{'b-(2 solid primary)': layoutMode === ELayoutMode.horizontal}">
            <div class="h-10 w-full bg-black" />
            <div class="h-full w-full bg-f4" />
          </div>
        </el-tooltip>
        <!-- 混合菜单 -->
        <el-tooltip content="混合菜单" placement="bottom">
          <div @click="changeLayoutModeClick(ELayoutMode.mix)"
            class="flex w-50 h-30 flex-col rd-3 overflow-hidden hand mr-20 layout-shadow"
            :class="{'b-(2 solid primary)': layoutMode === ELayoutMode.mix}">
            <div class="h-10 w-full bg-black" />
            <div class="w-full h-full flex ">
              <div class="w-15 h-full bg-fff b-(r-1 r-solid r-ddd)" />
              <div class="h-full w-full bg-f4" />
            </div>
          </div>
        </el-tooltip>
      </div>
    </section>
  </el-drawer>
</template>

<style lang="scss" scoped>
.layout-shadow{
  box-shadow: 0 0 10px rgba(0,0,0,0.3)
}
</style>
