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
        component: ()=> import('@/views/home/home.vue'),
        meta: {
          title: '首页',
          keepAlive: true
        }
      },
      {
        path: '/user-info',
        name: 'userInfo',
        component: ()=> import('@/views/layout/user-info.vue'),
        meta: {
          title: '用户信息',
          tag: true
        }
      }
    ]
  }
]
