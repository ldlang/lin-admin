import router from './index'
import useUserStore from '@/store/userStore'

router.beforeEach((to, from, next)=> {
  const store = useUserStore()
  // 如果当前路径已经是登录页且未登录，则直接进入
  if (to.path === '/login' && !store.token) {
    next()
  } else if (store.token) { // 已登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录且不是登录页，重定向至登录页
    next('/login')
  }
})

