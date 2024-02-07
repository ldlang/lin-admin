import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/views/index/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: ()=> import('@/views/home/home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
