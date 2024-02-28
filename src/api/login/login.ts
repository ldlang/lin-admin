import request from '@/request'
import type { ILoginFrom } from './type'

const enum apiPath {
  Login = '/users/login'
}

// 登录
export const loginApi = async<T>(data: ILoginFrom): Promise<IResult<T>>=> {
  return request({
    url: apiPath.Login,
    method: 'post',
    data
  })
}
