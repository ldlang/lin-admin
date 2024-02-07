<script setup lang="ts">
import useUserStore from '@/store/userStore'
const router = useRouter()
const store = useUserStore()
console.log(store.userList)

const gotoHome = ()=> {
  router.push({ path: '/home' })
}
</script>

<template>
  <div @click="gotoHome">
    主页
  </div>
  <about />
</template>
