import { IMenuList, IMenuItem } from '@/api'

declare interface IRouterUtils {
  /**
   * 链接路由格式化
   * @param menuList 菜单列表
   */
  linkRouteFormat(menuList: IMenuItem): void;
  /**
   * 格式化路由
   * @param menuList 菜单列表
   */
  formatRoutes(menuList: IMenuList): void;
}

declare module 'vue-router' {
  interface Router {
    routerUtils: IRouterUtils;
  }
}
