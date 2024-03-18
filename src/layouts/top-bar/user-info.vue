<script setup lang="ts">
import useUserStore from '@/store/userStore'
const router = useRouter()
const { userInfo } = toRefs(useUserStore())

const onUserCommand = (command: string)=> {
  if (command === 'logout') {
    router.replace('/login')
  }
}
</script>

<template>
  <div class="pr-20">
    <el-dropdown @command="onUserCommand">
      <template #default>
        <div class="flex flex-justify-center items-center cursor-pointer">
          <el-avatar shape="circle" :src="userInfo.avatar" size="small" />
          <span class="ml-1">{{ userInfo.name }}</span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </div>
      </template>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="user">个人信息</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
