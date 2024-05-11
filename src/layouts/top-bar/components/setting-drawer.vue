<script setup lang="ts">
const darkMode = defineAsyncComponent(()=> import('./dark-mode.vue'))
const show = ref(false)

const open = ()=> {
  show.value = true
}
const close = ()=> {
  show.value = false
}

defineExpose({
  open,
  close
})

</script>

<template>
  <el-drawer
    title="系统设置"
    v-model="show"
    size="35%">
    <div class="flex justify-center text-15">
      <span class="mr-10">暗黑</span>
      <dark-mode />
      <span class="ml-10">明亮</span>
    </div>
  </el-drawer>
</template>
