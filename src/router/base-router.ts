import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/layouts/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: ()=> import('@/views/home/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/login.vue')
  }
]
