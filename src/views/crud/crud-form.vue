<script lang="ts" setup>
import { ref } from 'vue'
import { ICrudItem } from '@/api'
import { FormInstance, FormRules } from 'element-plus'
import { isEmpty } from 'lodash-es'

const emit = defineEmits<{
  submitOk: []
}>()

const drawer = ref(false)
const formLoading = ref(false)

const formRef = ref<FormInstance>()
// form相关
const form = reactive<ICrudItem>({
  id: 0,
  name: '',
  age: 0,
  gender: '',
  email: '',
  phone: '',
  address: ''
})

const rules = reactive<FormRules<ICrudItem>>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请输入性别', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' }
  ],
  address: [
    { required: true, message: '请输入地址', trigger: 'blur' }
  ]
})

// 抽屉打开
function open(payload?: ICrudItem) {
  drawer.value = true
  if (!isEmpty(payload)) {
    Object.assign(form, payload)
  }
}
// 抽屉关闭之前
function beforeClose(done: any) {
  done()
}

// 取消
const cancelClick = ()=> {
  drawer.value = false
}

// 提交
const confirmClick = async()=> {
  await formRef.value?.validate((valid)=> {
    if (valid) {
      formLoading.value = true
      setTimeout(()=> {
        formLoading.value = false
        drawer.value = false
        ElMessage.success('提交成功！')
        emit('submitOk')
      }, 1000)
    } else {
      ElMessage.error('验证不通过！')
      return false
    }
  })
}

defineExpose({
  open
})
</script>
<template>
  <el-drawer
    v-model="drawer"
    title="编辑"
    size="30%"
    append-to-body
    :close-on-click-modal="false"
    :before-close="beforeClose">
    <el-form
      :model="form"
      ref="formRef"
      label-width="auto"
      :rules="rules"
      v-loading="formLoading">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="form.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="form.gender" placeholder="请输入性别" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="form.address" placeholder="请输入地址" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="cancelClick">取 消</el-button>
      <el-button type="primary" :loading="formLoading" @click="confirmClick">提 交</el-button>
    </template>
  </el-drawer>
</template>

