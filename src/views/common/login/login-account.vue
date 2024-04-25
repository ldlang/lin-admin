<script setup lang="ts">
import type { ILoginFromPassword } from '@/api'
const loginForm = defineModel<ILoginFromPassword>('loginForm')
// 密码是否可见
const isHide = ref(true)
</script>

<template>
  <el-form-item label="账号" prop="account">
    <el-input v-model="loginForm!.account" />
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input :type="isHide ? 'password' : 'text'" v-model="loginForm!.password">
      <template #suffix>
        <el-icon class="cursor-pointer" @click="isHide = !isHide">
          <component :is="isHide ? 'Hide' : 'View'" />
        </el-icon>
      </template>
    </el-input>
  </el-form-item>
</template>
