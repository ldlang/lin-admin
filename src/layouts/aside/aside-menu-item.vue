<script setup lang="ts">
import type { IMenuList, IMenuItem } from '@/api'
const router = useRouter()
defineProps<{
  menuList: IMenuList
}>()

// 路由跳转
function handleMenuItemClick(item: IMenuItem) {
  router.push(item.path)
}
</script>

<template>
  <template v-for="(item, index) in menuList" :key="index">
    <!-- 没有子级的菜单 -->
    <template v-if="item?.children?.length <= 0">
      <el-menu-item :index="item.path" @click="handleMenuItemClick(item)">
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 只有一层子级的菜单 -->
    <template v-if="item?.children?.length >= 1">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
          <template v-if="subItem?.children?.length <= 0">
            <el-menu-item
              :index="subItem.path"
              @click="handleMenuItemClick(subItem)">
              <el-icon>
                <component :is="subItem.icon" />
              </el-icon>
              <template #title>
                <span>{{ subItem.meta?.title }}</span>
              </template>
            </el-menu-item>
          </template>
          <!-- 有多级的菜单 - 递归 -->
          <template v-else>
            <aside-menu-item :menu-list="[subItem]" />
          </template>
        </template>
      </el-sub-menu>
    </template>
  </template>
</template>
