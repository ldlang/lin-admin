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
  <el-scrollbar height="100vh" class="b-(r-1 r-solid r-#eee) menu-scrollbar">
    <div class="top-title text-#606266 flex justify-center items-center text-25"
      :class="{'top-title-collapse': isCollapse}">
      <el-avatar :size="26" src="/lin-admin/image/avatar.jpg" class="mr-10" />
      <span v-show="!isCollapse">ldlang</span>
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
  // background: $menu-bg;
  .el-menu{
    border-right: none;
    // background: $menu-bg;
    // .el-menu-item.is-active {
    //   background: $menu-active-bg-color;
    //   color: $menu-active-text-color;
    // }
    // .el-menu-item {
    //   color: $menu-text-color;
    //   &:hover {
    //     background: $menu-hover-bg !important;
    //     color: $menu-hover-text-color;
    //   }
    // }
    // .el-sub-menu {
    //   &__title {
    //     color: $menu-text-color;
    //     &:hover {
    //       color: $menu-hover-text-color;
    //       background: $menu-hover-bg !important;
    //     }
    //   }
    // }
  }
  .aside-menu-collapse{
    width: $menu-collapse-width;
  }
}
.top-title{
  height: $top-title-height;
  // background: $top-title-bg;
  border-bottom: 1px solid $eee;
}

// 菜单折叠后弹出层样式
// .el-menu--popup-container {
//   .el-menu {
//     background: $meun-popup-bg;
//     .el-menu-item.is-active {
//       background: $meun-popup-active-bg-color !important;
//       color: $meun-popup-active-text-color;
//     }
//     .el-menu-item {
//       color: $meun-popup-text-color;
//       &:hover {
//         color: $meun-popup-hover-text-color;
//         background: $meun-popup-hover-bg !important;
//       }
//     }
//     .el-sub-menu {
//       background: $meun-popup-bg;
//       &__title {
//         color: $meun-popup-text-color;
//         &:hover {
//           color: $meun-popup-hover-text-color;
//           background: $meun-popup-hover-bg !important;
//         }
//       }
//     }
//   }
// }
</style>
