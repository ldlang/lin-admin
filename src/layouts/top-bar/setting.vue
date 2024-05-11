<script setup lang="ts">
const settingDrawer = defineAsyncComponent(()=> import('./components/setting-drawer.vue'))
const settingDrawerRef = ref<InstanceType<typeof settingDrawer> | null>(null)

function settingClick() {
  settingDrawerRef.value?.open()
}

</script>

<template>
  <div class="flex items-center !w-20 h-20 ml-10 hover:scale-130 hand"
    @click="settingClick">
    <el-tooltip content="设置" placement="bottom">
      <i class="iconfont icon-shezhi !text-20" />
    </el-tooltip>
  </div>

  <setting-drawer ref="settingDrawerRef" />
</template>
