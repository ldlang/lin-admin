<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive v-if="route.meta?.keepAlive">
        <component :is="Component" :key="route.path" />
      </keep-alive>
      <component v-else :is="Component" :key="route.path" />
    </template>
  </router-view>
</template>
