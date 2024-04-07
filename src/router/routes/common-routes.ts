import type { RouteRecordRaw } from 'vue-router'

export const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/login.vue'),
    meta: {
      title: '登录',
      tag: false
    }
  },
  {
    path: '/lock-page',
    name: 'lock-page',
    component: ()=> import('@/views/common/lock-page.vue'),
    meta: {
      title: '锁屏',
      tag: false
    }
  },
  {
    path: '/403',
    name: '403',
    component: ()=> import('@/views/common/403.vue'),
    meta: {
      title: '403',
      tag: false
    }
  },
  {
    path: '/404',
    name: '404',
    component: ()=> import('@/views/common/404.vue'),
    meta: {
      title: '404',
      tag: false
    }
  },
  {
    path: '/500',
    name: '500',
    component: ()=> import('@/views/common/500.vue'),
    meta: {
      title: '500',
      tag: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
