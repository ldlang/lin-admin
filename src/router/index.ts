import { createRouter, createWebHashHistory } from 'vue-router'
import { commonRoutes } from './common-router'
import { layoutRoutes } from './layout-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...commonRoutes, ...layoutRoutes]
})

export default router
