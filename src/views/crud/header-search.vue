<script setup lang="ts">
import { FormInstance } from 'element-plus'
import type { ISearchForm } from './type'

defineProps<{
  tableLoading: boolean
}>()

// 抛出的事件
const emit = defineEmits<{
  submitClick: [searchForm: ISearchForm],
  resetSearchClick: []
}>()

// 表单
const searchForm = reactive<ISearchForm>({
  name: '',
  phone: ''
})

// 验证规则
const searchRules = reactive({
  phone: [
    { pattern: /^\d+$/, min: 4, max: 11, message: '手机号至少输入四位数字', trigger: 'blur' }
  ]
})

const searchFormRef = ref<FormInstance | null>(null)

const submitClick = ()=> {
  searchFormRef.value?.validate((valid)=> {
    if (valid) {
      emit('submitClick', searchForm)
    } else {
      ElMessage.error('校验不通过！')
      return false
    }
  })
}

const resetSearchClick = ()=> {
  searchFormRef.value?.resetFields()
  emit('resetSearchClick')
}
</script>

<template>
  <el-form ref="searchFormRef" :inline="true" :model="searchForm" :rules="searchRules">
    <el-form-item label="姓名" prop="name">
      <el-input class="!w-200" v-model="searchForm.name" placeholder="请输入姓名" clearable />
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input class="!w-200" v-model="searchForm.phone" placeholder="请输入手机号" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="tableLoading" @click="submitClick">搜索</el-button>
      <el-button :loading="tableLoading" @click="resetSearchClick">重置</el-button>
    </el-form-item>
  </el-form>
</template>
