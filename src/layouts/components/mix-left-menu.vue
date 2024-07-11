<script setup lang="ts">
import { useUserStore } from '@/store'
const asideMenuItem = defineAsyncComponent(()=> import('../aside/aside-menu-item.vue'))
const { leftMenuList } = storeToRefs(useUserStore())
</script>

<template>
  <el-scrollbar class="menu-scrollbar">
    <el-menu
      unique-opened
      :default-active="$route.path"
      collapse-transition
      ellipsis>
      <aside-menu-item :menuList="leftMenuList" />
    </el-menu>
  </el-scrollbar>
</template>
