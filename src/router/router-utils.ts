import { IMenuItem, IMenuList } from '@/api'
import type { Router } from 'vue-router'
import { isEmpty, cloneDeep, isString } from 'lodash-es'
import { isUrl } from '@/utils'

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
   * 链接路由格式化
   * @param IMenuItem 菜单
   */
  linkRouteFormat(menuItem: IMenuItem) {
    const iframe = 'views/layout/iframe'
    if (menuItem.children.length <= 0 && isUrl(menuItem.meta.url as string) && !menuItem.meta.target) {
      menuItem.component = iframe
    }
    if (menuItem.children.length > 0) {
      menuItem.children.forEach(item=> {
        this.linkRouteFormat(item)
      })
    }
  }

  /**
   * 格式化路由
   * @param menuList 菜单列表
   */
  formatRoutes(menuList: IMenuList) {
    if (isEmpty(menuList)) return
    const routesList: IMenuList = []
    function recursiveRoutes(menus: IMenuList, isRecursion = false) {
      menus.forEach(item=> {
        /**
        * 对一级路由的处理，非递归进来的所以只会执行一次
        *
        * 如果只有一级路由，那么将一级路由注册为layouts下的index.vue路由，
        * 并且将其重定向到他自己身上，将他自己注册为其的子路由
        */
        if (!isRecursion) {
          // 将自己注册为layouts下的index.vue的子路由
          if (item.children?.length <= 0) {
            item.children = [{
              ...item,
              component: modules[`/src/${item.component}.vue`] as any
            }]
            item.redirect = item.path
          }
          // 将他自己注册为layouts下的index.vue路由
          item.component = modules[`/src/layouts/index.vue`] as any
          /**
           * 只需要将一级路由添加到routesList就行，因为对象的引用是同一个
           * 后续他的子路由处理过，它对应的路由也自然是处理后的结果
           */
          routesList.push(item)
          /**
           * 如果有子路由，那么递归处理
           */
          if (item.children?.length > 0) {
            recursiveRoutes(item.children, true)
          }
        }

        /**
         * 对子路由的处理，如果是递归进来的，那么他的父路由已经处理过了
         * 只需要对子路由进行处理即可
         *
         * 如果当前路由有没有子路由，那么将其注册为路由，否则将其注册为
         * layouts下的layout.vue组件，再次执行递归，知道没有子级，才将
         * 注册为路由
         */
        if (isRecursion) {
          /**
           * 如果当前路由没有子路由，那么将其注册为路由, 这个(isString(item.component))
           * 判断是因为对一级路由的处理，将他本身注册为了自己的子路由，
           * 此时他已是一个路由的promise，，不是一个component的字符创，
           * 也不需要再次注册为路由
           */
          if (item.children?.length <= 0 && isString(item.component)) {
            item.component = modules[`/src/${item.component}.vue`] as any
          }
          /**
           * 如果当前路由有子路由，那么将其注册为layouts下的layout.vue组件，
           * 再次执行递归，直到没有子级，才将注册为路由
           */
          if (item.children?.length > 0) {
            item.component = modules[`/src/layouts/layout.vue`] as any
            recursiveRoutes(item.children, true)
          }
        }
      })
    }
    recursiveRoutes(cloneDeep(menuList))
    routesList.forEach(item=> this.router.addRoute(item as any))
  }
}

