import type { InternalAxiosRequestConfig, AxiosError } from 'axios'
import useUserStore from '@/store/userStore'
const store = useUserStore()

const requestInterceptor = {
  /**
 * 发起请求前处理
 */
  success: (config: InternalAxiosRequestConfig)=> {
    // 接口几乎都是需要token的，所以统一加上token
    if (store.token) {
      config.headers.Authorization = `Bearer ${store.token}`
    }
    return config
  },
  /**
 * 发起请求错误处理
 */
  fail: (error: AxiosError)=> {
    return Promise.reject(error)
  }
}

export default requestInterceptor
