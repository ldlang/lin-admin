import type { RouteRecordRaw } from 'vue-router'

export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/login.vue')
  }
]
