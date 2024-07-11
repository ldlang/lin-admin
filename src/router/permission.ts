import router from './index'
import { useUserStore, useCommonStore } from '@/store'
import { progressStart, progressDone } from '@/utils'

// 锁屏页面路由
const LOCK_PATH = '/lock-page'

router.beforeEach(async(to, from, next)=> {
  progressStart()
  const { token, addMenuRoutes, routeIsLoad } = toRefs(useUserStore())
  const { isLock, addTagList } = toRefs(useCommonStore())

  // 如果当前路径已经是登录页且未登录，则直接进入
  if (to.path === '/login' && !token.value) {
    next()
  } else if (token.value) { // 已登录
    // 如果已经登录了，并且没有添加动态路由，那么添加动态路由
    if (!routeIsLoad.value) {
      await addMenuRoutes.value()
      routeIsLoad.value = true
      next({ ...to, replace: true })
      return
    }
    // 如果当前路径不是锁屏页且已锁屏，则跳转至锁屏页
    if (to.path !== LOCK_PATH && isLock.value) {
      next(LOCK_PATH)
      // 如果已经登录，还要跳转登录页，则不跳转
    } else if (to.path === '/login') {
      next(from.fullPath)
    } else {
      // 如果没有明确设为false的路由增加到tag上
      if (to.meta.tag != false) {
        addTagList.value({
          title: to.meta.title as string,
          path: to.path,
          fullPath: to.fullPath,
          params: to.params,
          query: to.query,
          meta: to.meta
        })
      }
      next()
    }
  } else {
    // 未登录且不是登录页，重定向至登录页
    next('/login')
  }
})

router.afterEach((to)=> {
  progressDone()
  // 设置页面标题
  document.title = to.meta.title as string
})

