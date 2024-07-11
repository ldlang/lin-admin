<script setup lang="ts">
import { useCommonStore } from '@/store'
const { isCollapse } = toRefs(useCommonStore())
</script>

<template>
  <div class="lg-logo">
    <div class="top-title text-gray flex justify-center items-center text-25 b-(r-1 r-solid r-eee)"
      :class="{'top-title-collapse': isCollapse}">
      <el-avatar :size="26" src="/lin-admin/image/avatar.jpg" class="mr-10" />
      <span v-show="!isCollapse">ldlang</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-title{
  height: $top-title-height;
  width: $menu-width;
  border-bottom: 1px solid $eee;
}
</style>
