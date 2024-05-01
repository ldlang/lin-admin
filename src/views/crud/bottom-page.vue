<script setup lang="ts">
import type { IPageProps } from './type'
// 获取父组件传递的参数
defineProps<IPageProps>()
const emit = defineEmits<{
  pageChange: [currentPage: number, pageSize: number]
}>()

// 当前页码
const currentPage = defineModel<number>('currentPage', { required: true })
// 每页条数
const pageSize = defineModel<number>('pageSize', { required: true })

// 监听每页条数变化
watch(pageSize, (newVal, oldVal)=> {
  if (newVal !== oldVal) {
    if (currentPage.value === 1) emit('pageChange', currentPage.value, newVal)
    currentPage.value = 1
  }
})

// 监听当前页码变化
watch(currentPage, (newVal, oldVal)=> {
  if (newVal !== oldVal) emit('pageChange', newVal, pageSize.value)
})
</script>

<template>
  <el-pagination
    v-model:page-size="pageSize"
    :pager-count="9"
    layout="prev, pager, next,sizes, jumper, total"
    :total="total"
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    v-model:current-page="currentPage" />
</template>
