<script setup lang="ts">
import type { ILoginFromCaptcha } from '@/api'
const loginForm = defineModel<ILoginFromCaptcha>('loginForm', { required: true })
const isSendCode = defineModel<boolean>('isSendCode', { required: true })

function onStart() {
  isSendCode.value = true
}
</script>

<template>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model="loginForm.phone" />
  </el-form-item>
  <el-form-item label="验证码" prop="captcha">
    <el-input v-model="loginForm.captcha">
      <template #suffix>
        <count-down @onStart="onStart" />
      </template>
    </el-input>
  </el-form-item>
</template>
