<script setup lang="ts">
import type { ILoginFromPassword, ILoginFromCaptcha } from '@/api'
import { loginApi, getUserInfoApi } from '@/api'
import type { FormInstance, FormRules, TabsPaneContext } from 'element-plus'
import { cloneDeep } from 'lodash-es'
import { Encrypt } from '@/utils'
import { useUserStore } from '@/store'
import { loginFormHooks, tabFormEnum } from './login-form-hooks'
const { token, userInfo } = storeToRefs(useUserStore())
const router = useRouter()
const { tabSelect, loginTabs, loginFromEnum } = loginFormHooks()

/**
 * 登录表单
 */
const loginForm = ref<ILoginFromPassword | ILoginFromCaptcha>(loginFromEnum[tabFormEnum.password].form)
/**
 * 登录表单验证规则
 */
const rules = ref<FormRules<ILoginFromPassword | ILoginFromCaptcha>>(loginFromEnum[tabFormEnum.password].rules)

// 是否发送了验证码
const isSendCode = ref(false)

const confirmLoading = ref(false)

function tabSelectClick(tab: TabsPaneContext) {
  loginForm.value = loginFromEnum[tab.props.name as tabFormEnum].form
  rules.value = loginFromEnum[tab.props.name as tabFormEnum].rules
}

// 登录按钮
const loginFormRef = ref<FormInstance>()
const onSubmitLoginClick = async()=> {
  if (tabSelect.value === tabFormEnum.sms && !isSendCode.value) {
    ElMessage.warning('请发送验证码！')
    return
  }
  await loginFormRef.value?.validate(async valid=> {
    if (valid) {
      confirmLoading.value = true
      try {
        let loginFormParams: Ref<ILoginFromPassword> | Ref<ILoginFromCaptcha>
        if (tabSelect.value === tabFormEnum.password) {
          loginFormParams = cloneDeep(loginForm) as Ref<ILoginFromPassword>
          loginFormParams.value.password = Encrypt(loginFormParams.value.password)
        } else {
          loginFormParams = cloneDeep(loginForm) as Ref<ILoginFromCaptcha>
          loginFormParams.value.phone = Encrypt(loginFormParams.value.phone)
        }
        // 登录
        const res = await loginApi(loginFormParams!.value)
        token.value = res?.data?.token
        // 获取用户信息
        const result = await getUserInfoApi()
        if (result.code === 200) {
          userInfo.value = result?.data
          ElMessage.success('登录成功！')
          router.replace('/')
          confirmLoading.value = false
        }
      } catch (error: any) {
        confirmLoading.value = false
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
    <el-card shadow="always" class="w-400 h-300">
      <template #header>
        <h3 class="text-center">
          lin-admin
        </h3>
      </template>
      <el-tabs v-model="tabSelect" class="mb-20" @tab-click="tabSelectClick">
        <template v-for="(item, index) in loginTabs" :key="index">
          <el-tab-pane :label="item.label" :name="item.value" />
        </template>
      </el-tabs>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="60px"
        hide-required-asterisk>
        <div class="h-100">
          <!-- 账号密码登录 -->
          <template v-if="tabSelect === tabFormEnum.password">
            <component
              :is="(loginFromEnum[tabSelect as tabFormEnum].component as any)"
              v-model:loginForm="loginForm" />
          </template>
          <!-- 短信验证码登录 -->
          <template v-if="tabSelect === tabFormEnum.sms">
            <component
              :is="(loginFromEnum[tabSelect as tabFormEnum].component as any)"
              v-model:loginForm="loginForm"
              v-model:isSendCode="isSendCode" />
          </template>
        </div>
        <!-- 登录按钮 -->
        <el-button
          type="primary"
          class="w-full"
          :loading="confirmLoading"
          @click="onSubmitLoginClick">
          登录
        </el-button>
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
