import { createRouter, createWebHashHistory } from 'vue-router'
import { commonRoutes } from './routes/common-routes'
import { layoutRoutes } from './routes/layout-routes'
import { RouterUtils } from './router-utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...commonRoutes, ...layoutRoutes]
})

// 添加对路由处理的工具方法
router.routerUtils = new RouterUtils(router)

export default router
