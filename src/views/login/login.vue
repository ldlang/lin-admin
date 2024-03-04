<script setup lang="ts">
// todo 必填字段未填时，失去焦点控制台会报警告
import type { ILoginFrom } from '@/api'
import { loginApi, getUserInfoApi } from '@/api'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash'
import { Encrypt } from '@/utils'
import useUserStore from '@/store/userStore'
const store = useUserStore()
const router = useRouter()

// 密码是否可见
const isHide = ref(true)

const loginForm = reactive<ILoginFrom>({
  account: 'super',
  password: 'super'
})

const rules = reactive<FormRules<ILoginFrom>>({
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 登录按钮
const loginFormRef = ref<FormInstance>()
const onSubmitLoginClick = async()=> {
  await loginFormRef.value?.validate(async valid=> {
    if (valid) {
      try {
        const loginFormParams = cloneDeep(loginForm)
        loginFormParams.password = Encrypt(loginForm.password)
        // 登录
        const res = await loginApi(loginFormParams)
        store.token = res?.data?.token
        // 获取用户信息
        const result = await getUserInfoApi()
        store.userInfo = result?.data
        ElMessage.success('登录成功！')
        router.replace('/')
      } catch (error: any) {
        console.error(error)
      }
    } else {
      ElMessage.error({ message: '验证未通过！' })
    }
  })
}
</script>

<template>
  <div class="login flex justify-center items-center">
    <el-card shadow="always" class="w-100 h-60">
      <template #header>
        <h3 class="text-center">
          lindalang - blog后台
        </h3>
      </template>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="60px">
        <el-form-item label="账号" prop="account">
          <el-input class="rounded-none" v-model="loginForm.account" />
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
