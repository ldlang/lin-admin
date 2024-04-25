<script setup lang="ts">
import type { ILoginFromCaptcha } from '@/api'
const loginForm = defineModel<ILoginFromCaptcha>('loginForm')
</script>

<template>
  <el-form-item label="手机号" prop="phone">
    <el-input v-model="loginForm!.phone" />
  </el-form-item>
  <el-form-item label="验证码" prop="captcha">
    <el-input v-model="loginForm!.captcha" />
  </el-form-item>
</template>
