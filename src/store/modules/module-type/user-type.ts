import type { IUserInfo, IMenuList } from '@/api'

export interface IUserState {
  /** token */
  token: string
  /** 用户信息 */
  userInfo: IUserInfo
  /** 路由列表 */
  menuList: IMenuList
  /** 动态路由是否添加 */
  routeIsLoad: boolean,
  /** 菜单-混合模式下左侧的菜单 */
  leftMenuList: IMenuList
}
