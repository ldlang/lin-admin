import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/views/index/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: ()=> import('@/views/home/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/login.vue')
  }
]
