<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const gotoHome = ()=> {
  router.push({ path: '/home' })
}
</script>

<template>
  <div @click="gotoHome">
    主页
  </div>
</template>
