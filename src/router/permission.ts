import router from './index'
import useUserStore from '@/store/modules/user'
import useCommomStore from '@/store/modules/common'

// 锁屏页面路由
const LOCK_PATH = '/lock-page'

router.beforeEach((to, from, next)=> {
  const { token } = toRefs(useUserStore())
  const { isLock } = toRefs(useCommomStore())
  // 如果当前路径已经是登录页且未登录，则直接进入
  if (to.path === '/login' && !token.value) {
    next()
  } else if (token.value) { // 已登录
    if (to.path !== LOCK_PATH && isLock.value) {
      next(LOCK_PATH)
    } else if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录且不是登录页，重定向至登录页
    next('/login')
  }
})

