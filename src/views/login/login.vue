<script setup lang="ts">
// todo 必填字段未填时，失去焦点控制台会报警告
import type { ILoginFrom } from '@/api'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

// 密码是否可见
const isHide = ref(true)

const loginForm = reactive<ILoginFrom>({
  username: '',
  password: ''
})

const rules = reactive<FormRules<ILoginFrom>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 登录按钮
const loginFormRef = ref<FormInstance>()
const onSubmitLoginClick = async()=> {
  await loginFormRef.value?.validate((valid)=> {
    if (valid) {
      console.log('submit!')
    } else {
      ElMessage({
        message: '验证未通过！',
        grouping: true,
        type: 'error'
      })
    }
  })
}

</script>

<template>
  <div class="login flex justify-center items-center">
    <el-card shadow="always" class="w-35vw h-35vh">
      <template #header>
        <h3 class="text-center">
          lindalang - 后台
        </h3>
      </template>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input :type="isHide ? 'password' : 'text'" v-model="loginForm.password">
            <template #suffix>
              <el-icon class="cursor-pointer" @click="isHide = !isHide">
                <component :is="isHide ? 'Hide' : 'View'" />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-button type="primary" class="w-full" @click="onSubmitLoginClick">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: url("/image/bg.jpg");
    background-size:cover;
    background-position: center center;
}
</style>
