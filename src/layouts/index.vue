<script setup lang="ts">
import { ELayoutMode } from './type'
const menuVertical = defineAsyncComponent(()=> import('./components/menu-vertical.vue'))
const menuHorizontal = defineAsyncComponent(()=> import('./components/menu-horizontal.vue'))
const menuMix = defineAsyncComponent(()=> import('./components/menu-mix.vue'))
import useCommonStore from '@/store/modules/common'
const { layoutMode } = storeToRefs(useCommonStore())

type TMenuModeObj = { [key in ELayoutMode]: typeof menuVertical | typeof menuHorizontal | typeof menuMix }
const menuModeObj = reactive<TMenuModeObj>({
  [ELayoutMode.vertical]: markRaw(menuVertical),
  [ELayoutMode.horizontal]: markRaw(menuHorizontal),
  [ELayoutMode.mix]: markRaw(menuMix)
})
</script>

<template>
  <component :is="menuModeObj[layoutMode]" />
</template>
