import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './base-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
