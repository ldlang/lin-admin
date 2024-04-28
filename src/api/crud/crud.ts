import request from '@/request'
import type { ICrudApiParams, ICrudApiResult } from './type'

const enum apiPath {
  getList = '/crud/getList',
}

// 登录
export function getListApi(params: ICrudApiParams): Promise<IResult<ICrudApiResult>> {
  return request({
    url: apiPath.getList,
    method: 'get',
    params
  })
}

