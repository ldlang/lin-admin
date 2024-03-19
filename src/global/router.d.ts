import { VueRouter } from 'vue-router'

declare interface IRouterUtils {
  /**
   * 路由工具类
   */
  formatRoutes(routes: any[]): any;
}

declare module 'vue-router' {
  interface Router {
    routerUtils: IRouterUtils;
  }
}
