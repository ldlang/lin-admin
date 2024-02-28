import type { AxiosResponse, AxiosError } from 'axios'

const requestInterceptor = {
  /**
 * 请求成功
 */
  success: (response: AxiosResponse)=> {
    const data = response?.data || {}
    return Promise.resolve(data)
  },
  /**
 * 请求失败
 */
  fail: (error: AxiosError)=> {
    return Promise.reject(error)
  }
}

export default requestInterceptor
