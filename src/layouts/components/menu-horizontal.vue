<script setup lang="ts">
import asideMenu from '../aside/aside-menu.vue'
import topBar from '../top-bar/index.vue'
import tag from '../tag/tag.vue'
import { useCommonStore } from '@/store'
const lgLogo = defineAsyncComponent(()=> import('../components/lg-logo.vue'))
const { isCollapse } = storeToRefs(useCommonStore())
</script>

<template>
  <el-container class="layout-container">
    <el-container>
      <el-header class="fixed top-0 right-0 z-10" :class="{'header-collapse': isCollapse}">
        <top-bar>
          <div class="flex">
            <lg-logo />
            <aside-menu mode="horizontal" />
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

.el-header {
  transition: all 0.3s;
  padding: 0;
  height: calc(#{$top-bar-height} + #{$top-tag-height});
  width: 100%;
}
.header-placeholder{
  height: calc(#{$top-bar-height} + #{$top-tag-height});
  width: 100%;
}

.header-collapse{
  transition: all 0.3s;
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
