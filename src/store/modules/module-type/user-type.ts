import type { IUserInfo, IMenuList } from '@/api'

export interface IUserState {
  token: string
  userInfo: IUserInfo,
  menuList: IMenuList
}
