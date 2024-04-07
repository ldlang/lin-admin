<script lang="ts" setup>
import { IUserInfoFrom } from '@/api'
import type { FormInstance, FormRules, UploadFile, UploadUserFile } from 'element-plus'
import useUserInfoStore from '@/store/modules/user'
const { userInfo } = toRefs(useUserInfoStore())

// form实例
const formRef = ref<FormInstance>()

// 默认显示头像
const avatarDefaultList = ref<UploadUserFile[]>([{
  name: 'avatar',
  url: userInfo.value.avatar
}])

// 是否隐藏上传按钮
const isHideUpload = computed(()=> {
  return avatarDefaultList.value.length != 0
})
// 用户信息
const userInfoForm = reactive<IUserInfoFrom>({
  name: userInfo.value.name,
  avatar: userInfo.value.avatar,
  newPassword: '',
  confirmPassword: ''
})

// 规则
const rules = reactive<FormRules<IUserInfoFrom>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  avatar: [
    { required: true, message: '请上传头像', trigger: 'blur' }
  ],
  newPassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback)=> {
        if (userInfoForm.newPassword !== userInfoForm.confirmPassword) {
          callback(new Error('两次密码不一致'))
        }
        callback()
      },
      trigger: 'blur'
    }
  ]
})

// 提交
const submitFormClick = async(formEl: FormInstance | undefined)=> {
  if (!formEl) return
  await formEl.validate((valid)=> {
    if (valid) {
      ElMessage.success('修改成功')
    } else {
      ElMessage.error('请填写完整信息')
      return false
    }
  })
}

// 清空表单
function resetFromClick(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.resetFields()
  let key: keyof IUserInfoFrom
  for (key in userInfoForm) {
    userInfoForm[key] = ''
  }
  avatarDefaultList.value = []
}
</script>

<template>
  <div class="w-full h-full p-20 overflow-hidden">
    <el-form
      ref="formRef"
      :model="userInfoForm"
      :rules="rules"
      label-width="auto"
      class="w-300">
      <el-form-item label="头像：" prop="avatar">
        <el-upload
          action="#"
          :limit="1"
          :class="{'hide-upload': isHideUpload }"
          list-type="picture-card"
          v-model:file-list="avatarDefaultList"
          :auto-upload="false">
          <el-icon size="20"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="userInfoForm.name" />
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassword">
        <el-input v-model="userInfoForm.newPassword" />
      </el-form-item>
      <el-form-item label="确认密码：" prop="confirmPassword">
        <el-input v-model="userInfoForm.confirmPassword" />
      </el-form-item>
      <el-form-item>
        <div class="flex justify-end w-full">
          <el-button @click="resetFromClick(formRef)">重 置</el-button>
          <el-button type="primary" @click="submitFormClick(formRef)">提 交</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>

</template>

<style lang="scss" scoped>
.hide-upload{
  ::v-deep(.el-upload--picture-card){
    display: none;
  }
}
::v-deep(.el-upload--picture-card){
  width: 100px;
  height: 100px;
}
::v-deep(.el-upload-list__item){
  width: 100px;
  height: 100px;
}
</style>
