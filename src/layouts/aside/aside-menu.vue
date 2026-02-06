<script setup lang="ts">
import { IMenuList } from '@/api'
import { useUserStore, useCommonStore } from '@/store'
import { cloneDeep } from 'lodash-es'
const asideMenuItem = defineAsyncComponent(()=> import('./aside-menu-item.vue'))
const { menuList } = storeToRefs(useUserStore())
const { isCollapse, theme } = storeToRefs(useCommonStore())

const { isNeedChildren } = withDefaults(defineProps<{
   mode?: 'vertical' | 'horizontal',
   isNeedChildren?: boolean,
   activeMenu?: string
  }>(), {
  mode: 'vertical',
  isNeedChildren: true
})

const menuAll = ref<IMenuList>([])

// 混合模式下顶部按钮不需要子级菜单
watch(()=> isNeedChildren, (val)=> {
  menuAll.value = val === false ? cloneDeep(menuList.value)?.map(item=> ({ ...item, children: [] })) : menuList.value
}, { immediate: true })

const popperEffect = ref<'light' | 'dark'>(theme.value === 'colorful' ? 'light' : 'dark')
watch(theme, (val)=> {
  popperEffect.value = val === 'colorful' ? 'light' : 'dark'
})

</script>

<template>
  <!-- 不能在这个页面直接递归，因为这样就会产生两个el-menu，
  导致深层次的菜单刷新无法默认展开，所以需要在子组件中递归 -->
  <el-scrollbar class="menu-scrollbar"
    :class="[mode === 'vertical'? 'vertical-height b-(r-1 r-solid r-eee)' : 'horizontal-height']">
    <el-menu
      :class="{'aside-menu-collapse': isCollapse }"
      unique-opened
      :default-active="activeMenu || $route.path"
      collapse-transition
      :mode="mode"
      :collapse="isCollapse"
      style="max-width: 50vw;"
      ellipsis>
      <aside-menu-item :menuList="menuAll" :isNeedChildren="isNeedChildren" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss">
:root{
  --el-menu-item-height: 30px;
}
.vertical-height{
  height: calc(100vh - #{$top-bar-height});
}
.horizontal-height{
  height: calc(#{$top-bar-height} - 1px);
  .el-menu--horizontal.el-menu{
    height: calc(#{$top-bar-height} - 1px);
  }
}
.menu-scrollbar{
  transition: all 0.3s;

  .el-menu{
    border-right: none;
  }
  .aside-menu-collapse{
    width: $menu-collapse-width;
  }
}
.el-menu--horizontal{
  height: $top-bar-height;
}
.el-menu--horizontal.el-menu {
  border-bottom: none;
}
</style>
