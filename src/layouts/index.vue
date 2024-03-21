<script setup lang="ts">
import asideMenu from './aside/aside-menu.vue'
import topBar from './top-bar/index.vue'
import useUserStore from '@/store/modules/user'
const { menuList } = toRefs(useUserStore())

</script>

<template>
  <div>
    <el-container>
      <el-aside class="h-screen">
        <el-scrollbar height="100vh">
          <aside-menu :menuList="menuList" />
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <top-bar />
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
  </div>
</template>

<style lang="scss" scoped>
.el-aside {
  width: $menu-width;
}

.el-header {
  padding: 0;
  height: $top-bar-height;
}

.el-main {
  background-color: $mian-bg;
  div {
    background-color: $bg-fff;
  }
}

.el-scrollbar{
  .el-menu{
    border-right: none;
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
