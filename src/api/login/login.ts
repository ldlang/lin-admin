import request from '@/request'
import type { ILoginFrom, ILoginResult } from './type'

const enum apiPath {
  Login = '/users/login'
}

// 登录
export const loginApi = (data: ILoginFrom): Promise<IResult<ILoginResult>>=> {
  return request({
    url: apiPath.Login,
    method: 'post',
    data
  })
}
