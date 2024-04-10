<script setup lang="ts">
import useCommonStore from '@/store/modules/common'
const { isCollapse } = toRefs(useCommonStore())

function collapseClick() {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <div class="flex items-center hover:scale-130">
    <el-icon
      :size="20"
      @click="collapseClick"
      class="hand"
      :class="{ 'exapand-collapse': isCollapse}">
      <Expand />
    </el-icon>
  </div>
</template>

<style lang="scss">
.exapand-collapse{
  transition: all 0.3s;
  transform: rotate(90deg);
}
</style>
