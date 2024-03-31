import type { RouteRecordRaw } from 'vue-router'

export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/lock-page',
    name: 'lock-page',
    component: ()=> import('@/views/common/lock-page.vue'),
    meta: {
      title: '锁屏'
    }
  }
]
