<script setup lang="ts">
import asideMenuItem from './aside-menu-item.vue'
import useCommonStore from '@/store/modules/common'
import useUserStore from '@/store/modules/user'
const { menuList } = toRefs(useUserStore())
const { isCollapse, theme } = toRefs(useCommonStore())

const popperEffect = ref<'light' | 'dark'>(theme.value === 'colorful' ? 'light' : 'dark')
watch(theme, (val)=> {
  popperEffect.value = val === 'colorful' ? 'light' : 'dark'
})
</script>

<template>
  <!-- 不能在这个页面直接递归，因为这样就会产生两个el-menu，
  导致深层次的菜单刷新无法默认展开，所以需要在子组件中递归 -->
  <el-scrollbar height="100vh" class="bg-white menu-scrollbar">
    <div class="top-title text-white flex justify-center items-center text-25"
      :class="{'top-title-collapse': isCollapse}">
      ldlang
    </div>
    <el-menu
      :class="{'aside-menu-collapse': isCollapse }"
      unique-opened
      :default-active="$route.path"
      collapse-transition
      :collapse="isCollapse"
      :popper-effect="popperEffect">
      <aside-menu-item :menuList="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss">
:root{
  --el-menu-item-height: 30px;
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
.top-title{
  height: $top-title-height;
  background: #5eaff1;
}
.top-title-collapse{
  font-size: 18px;
}
</style>
