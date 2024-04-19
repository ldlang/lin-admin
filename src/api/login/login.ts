import request from '@/request'
import type { ILoginFrom, ILoginResult, IUserInfo } from '@/api'

const enum apiPath {
  Login = '/users/login',
  UserInfo = '/users/user-info'
}

// 登录
export const loginApi = (data: ILoginFrom): Promise<IResult<ILoginResult>>=> {
  return request({
    url: apiPath.Login,
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfoApi = (): Promise<IResult<IUserInfo>>=> {
  return request({
    url: apiPath.UserInfo,
    method: 'get'
  })
}
