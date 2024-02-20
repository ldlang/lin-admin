<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div :key="$route.path">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
