<script setup lang="ts">
import useUserStore from '@/store/userStore'
const router = useRouter()
const store = useUserStore()
const { userInfo } = toRefs(store)

const onFullScreenClick = ()=> {
  const screen = document.fullscreenElement
  if (!screen) {
  // 全屏
    document.documentElement.requestFullscreen()
  } else {
  // 退出全屏
    document.exitFullscreen()
  }
}

const onUserCommand = (command: string)=> {
  if (command === 'logout') {
    store.$reset()
    router.replace('/login')
  }
}

</script>

<template>
  <div class="flex justify-between w-full bg-gray-400 h-full px-5 py-1.25">
    <div>左</div>
    <div class="flex items-center">
      <el-tooltip content="全屏" class="px-1" placement="bottom">
        <el-icon @click="onFullScreenClick" class="cursor-pointer">
          <FullScreen />
        </el-icon>
      </el-tooltip>

      <div class="px-2.5">
        <el-dropdown @command="onUserCommand">
          <template #default>
            <div class="flex justify-center items-center cursor-pointer">
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

    </div>
  </div>
</template>
