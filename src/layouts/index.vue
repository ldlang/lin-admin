<script setup lang="ts">
import asideMenu from './aside/aside-menu.vue'
import topBar from './top-bar/index.vue'
import tag from './tag/tag.vue'
import useCommonStore from '@/store/modules/common'
const { isCollapse } = toRefs(useCommonStore())

</script>

<template>
  <el-container>
    <el-aside class="h-screen" :class="{ 'aside-collapse': isCollapse }">
      <aside-menu />
    </el-aside>
    <el-container>
      <el-header>
        <top-bar />
        <tag />
      </el-header>
      <el-main>
        <div class="w-full h-full">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <div :key="$route.path">
                <component :is="Component" />
              </div>
            </transition>
          </router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-aside {
  transition: all 0.3s;
  width: $menu-width;
}
.aside-collapse{
  width: $menu-collapse-width;
}

.el-header {
  padding: 0;
  height: calc(#{$top-bar-height} + #{$top-tag-height});
}

.el-main {
  background-color: $mian-bg;
  div {
    background-color: $bg-fff;
  }
}

// 路由切换动画
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
