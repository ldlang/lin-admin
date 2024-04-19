import request from '@/request'
import type { IMenuList, IUserInfo } from '@/api'

const enum apiPath {
  menus = '/users/menus',
}

// 登录
export const getMeunsApi = (params: Pick<IUserInfo, 'account'>): Promise<IResult<IMenuList>>=> {
  return request({
    url: apiPath.menus,
    method: 'get',
    params
  })
}

