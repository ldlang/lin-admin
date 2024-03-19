import type { RouteRecordRaw } from 'vue-router'

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('@/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: ()=> import('@/views/home/home.vue')
      }
    ]
  }
]
