<script setup lang="ts">
const router = useRouter()

const gotoHome = ()=> {
  router.push({ path: '/home' })
}
</script>

<template>
  <div @click="gotoHome" class="home">
    主页
  </div>
  <about />
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    background-color: $primary-color;
  }
</style>
