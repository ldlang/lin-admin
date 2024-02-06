<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref()
</script>

<template>
  <div class="w-50 h-50 bg-red-500 shadow-2xl shadow-gray-500">admin</div>
  <el-rate v-model="value1" />22
  <el-icon :size="20">
    <Edit />
  </el-icon>
</template>

<style scoped>
</style>
