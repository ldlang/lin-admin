import request from '@/request'
import type { ILoginFrom, ILoginResult, IUserInfo } from '@/api'

const enum apiPath {
  Login = '/users/login',
  UserInfo = '/users/user-info'
}

// 登录
export function loginApi(data: ILoginFrom): Promise<IResult<ILoginResult>> {
  return request({
    url: apiPath.Login,
    method: 'post',
    data
  })
}

// 获取用户信息
export function getUserInfoApi(): Promise<IResult<IUserInfo>> {
  return request({
    url: apiPath.UserInfo,
    method: 'get'
  })
}
