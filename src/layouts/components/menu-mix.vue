<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import useCommomStore from '@/store/modules/common'
import type { IMenuList, IMenuItem } from '@/api'
const topBar = defineAsyncComponent(()=> import('../top-bar/index.vue'))
const tag = defineAsyncComponent(()=> import('../tag/tag.vue'))
const lgLogo = defineAsyncComponent(()=> import('../components/lg-logo.vue'))
const mixLeftMenu = defineAsyncComponent(()=> import('./mix-left-menu.vue'))
const asideMenu = defineAsyncComponent(()=> import('../aside/aside-menu.vue'))
const { menuList, leftMenuList } = storeToRefs(useUserStore())
const { mixMenuActive, activeTag } = storeToRefs(useCommomStore())

const isShowLeftMenu = computed(()=> leftMenuList.value.length > 0)

watch(mixMenuActive, (newVal)=> {
  if (newVal === '') {
    // 找到当前激活的菜单的parentId
    let parentId: number = Number.MAX_VALUE
    let parentMenu: IMenuItem = {} as IMenuItem
    const findMenuParentId = (menu: IMenuList)=> {
      for (let index = 0; index < menu.length; index++) {
        if (activeTag.value.path === menu[index].path) {
          parentId = menu[index].parentId
          parentMenu = menu[index]
        } else {
          menu[index].children.length > 0 && findMenuParentId(menu[index].children)
        }
      }
    }
    findMenuParentId(menuList.value)
    // 如何已经是最顶级的父级那么直接赋值
    if (parentId === 0) {
      mixMenuActive.value = parentMenu?.path
      leftMenuList.value = parentMenu?.children?.length > 0 ? parentMenu?.children : []
    } else {
      const findMenuPath = (menu: IMenuList)=> {
        for (let i = 0; i < menu.length; i++) {
          if (parentId === menu[i].id) {
            if (menu[i].parentId !== 0) {
              parentId = menu[i].parentId
              findMenuPath(menuList.value)
            } else {
              mixMenuActive.value = menu[i].path
              leftMenuList.value = menu[i].children.length > 0 ? menu[i].children : []
              break
            }
          } else {
            menu[i].children.length > 0 && findMenuPath(menu[i].children)
          }
        }
      }
      findMenuPath(menuList.value)
    }
  }
}, {
  immediate: true,
  deep: true
})

</script>

<template>
  <el-container class="layout-container">
    <el-aside class="h-screen fixed left-0 top-0 z-10" v-show="isShowLeftMenu">
      <mix-left-menu />
    </el-aside>
    <div class="aside-placeholder shrink-0" :class="{'!w-0px': !isShowLeftMenu}" />
    <el-container>
      <el-header class="fixed top-0 right-0 z-10" :class="{'!w-100%': !isShowLeftMenu}">
        <top-bar>
          <div class="flex">
            <lg-logo />
            <aside-menu mode="horizontal" :isNeedChildren="false" :activeMenu="mixMenuActive" />
          </div>
        </top-bar>
        <tag />
      </el-header>
      <div class="header-placeholder" />
      <el-scrollbar class="main-scrollbar">
        <el-main class="w-full h-full">
          <router-view>
            <template #default="{ Component, route }">
              <transition name="fade" mode="out-in">
                <div v-if="Component" class="w-full h-full">
                  <keep-alive v-if="route.meta?.keepAlive">
                    <component :is="Component" :key="route.path" />
                  </keep-alive>
                  <component v-else :is="Component" :key="route.path" />
                </div>
              </transition>
            </template>
          </router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-aside, .aside-placeholder {
  transition: all 0.3s;
  width: $menu-width;
}
.el-header {
  transition: all 0.3s;
  padding: 0;
  height: calc(#{$top-bar-height} + #{$top-tag-height});
  width: calc(100% - #{$menu-width});
}
.header-placeholder{
  height: calc(#{$top-bar-height} + #{$top-tag-height});
  width: 100%;
}

.main-scrollbar{
  height: calc(100vh - #{$top-bar-height} - #{$top-tag-height});
  ::v-deep(.el-scrollbar__wrap){
    .el-scrollbar__view{
      height: 100%;
    }
  }
}

.el-main {
  background-color: $main-bg;
}

// 路由切换动画
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
