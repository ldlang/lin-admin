<script setup lang="ts">
import useUserStore from '@/store/modules/user'
const router = useRouter()
const { userInfo } = toRefs(useUserStore())

const onUserCommand = (command: string)=> {
  if (command === 'logout') {
    router.replace('/login')
  }
}
</script>

<template>
  <div class="user-info ml-10">
    <el-dropdown @command="onUserCommand">
      <template #default>
        <div class="flex flex-justify-center items-center hand text-main">
          <el-avatar shape="circle" class="flex-shrink-0" :src="userInfo.avatar" size="small" />
          <span class="ml-1 flex-shrink-0">{{ userInfo.name }}</span>
          <el-icon class="el-icon--right flex-shrink-0"><arrow-down /></el-icon>
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

<style lang="scss">
.user-info {
  // 隐藏el-dropdown选中时的边框
  :focus-visible {
    outline: -webkit-focus-ring-color auto 0;
  }
}
</style>
