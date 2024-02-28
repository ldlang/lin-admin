import type { InternalAxiosRequestConfig, AxiosError } from 'axios'
/**
 * 发起请求前处理
 */
const success = async(config: InternalAxiosRequestConfig)=> {
  return config
}

/**
 * 发起请求错误处理
 */
const fail = async(error: AxiosError)=> {
  return Promise.reject(error)
}

export default {
  success,
  fail
}
