<script setup lang="ts">
import { ELayoutMode } from './type'
const menuVertical = defineAsyncComponent(()=> import('./components/menu-vertical.vue'))
const menuHorizontal = defineAsyncComponent(()=> import('./components/menu-horizontal.vue'))
const menuMix = defineAsyncComponent(()=> import('./components/menu-mix.vue'))
import { useCommonStore, useUserStore } from '@/store'
const { layoutMode } = storeToRefs(useCommonStore())
const { userInfo } = storeToRefs(useUserStore())

type TMenuModeObj = { [key in ELayoutMode]: typeof menuVertical | typeof menuHorizontal | typeof menuMix }
const menuModeObj = reactive<TMenuModeObj>({
  [ELayoutMode.vertical]: markRaw(menuVertical),
  [ELayoutMode.horizontal]: markRaw(menuHorizontal),
  [ELayoutMode.mix]: markRaw(menuMix)
})

const waterMarkContent = computed(()=> {
  return [userInfo.value.name, userInfo.value.phone]
})
</script>

<template>
  <el-watermark :font="{ color: 'rgba(0, 0, 0, .15)',}" :content="waterMarkContent">
    <component :is="menuModeObj[layoutMode]" />
  </el-watermark>
</template>
