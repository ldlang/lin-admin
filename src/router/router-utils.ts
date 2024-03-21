import { IMenuList, IMenuItem } from '@/api'
import type { Router } from 'vue-router'
import { isEmpty } from 'lodash'

const modules = import.meta.glob(['/**/**/**/*.vue'])

interface IRouterUtils {
  router: Router
  formatRoutes(menuList: IMenuList): void
}
export class RouterUtils implements IRouterUtils {
  // 属性
  router: Router

  // 构造函数
  constructor(router: Router) {
    this.router = router
  }

  /**
   * 格式化路由
   * @param menuList 菜单列表
   * @params isRecursion 是否递归
   */
  formatRoutes(menuList: IMenuList) {
    if (isEmpty(menuList)) return
    const routesList: IMenuList = []
    function recursiveRoutes(menus: IMenuList, isRecursion = false) {
      menus.forEach(item=> {
        if (!isRecursion) {
          item.component = modules[`/src/layouts/index.vue`] as any
          item.redirect = item.path
          item.children = []
          routesList.push(item)
        }
        if (item.children?.length <= 0 && isRecursion) {
          item.component = modules[`/src/${item.component}.vue`] as any
          item.children = []
          routesList.push(item)
        }
        if (item.children?.length > 0 && isRecursion) {
          item.component = modules['/src/layouts/layout.vue'] as any
          routesList.push(item)
          item.children = []
          recursiveRoutes(item.children, true)
        }
      })
    }
    recursiveRoutes(menuList)
    console.log('routesList', routesList)
    routesList.forEach(item=> this.router.addRoute(item as any))
    console.log(this.router.getRoutes())
  }
}

