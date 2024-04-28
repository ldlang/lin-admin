<script setup lang="ts">
interface ISearchForm {
  name: string
  phone: string
}

const emit = defineEmits<{
  submitClick: [],
  cancelClick: []
}>()

// 表单
const searchForm = reactive<ISearchForm>({
  name: '',
  phone: ''
})

// 验证规则
const searchRules = reactive({
  phone: [
    { min: 4, max: 11, message: '手机号至少输入四位', trigger: 'blur' }
  ]
})

const submitClick = ()=> {
  emit('submitClick')
}

const cancelClick = ()=> {
  emit('cancelClick')
}
</script>

<template>
  <el-form :inline="true" :model="searchForm" :rules="searchRules">
    <el-form-item label="姓名">
      <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable />
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="searchForm.phone" placeholder="请输入手机号" clearable />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitClick">搜索</el-button>
      <el-button @click="cancelClick">重置</el-button>
    </el-form-item>
  </el-form>
</template>
