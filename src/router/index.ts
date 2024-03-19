import { createRouter, createWebHashHistory } from 'vue-router'
import { commonRoutes } from './routes/common-routes'
import { layoutRoutes } from './routes/layout-routes'
import { routerUtils } from './router-utils'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...commonRoutes, ...layoutRoutes]
})

// 添加对路由处理的工具方法
router.routerUtils = routerUtils

export default router
