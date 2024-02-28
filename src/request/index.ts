import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import requestInterceptor from './request-interceptor' // 请求拦截器
import responseInterceptor from './response-interceptor' // 响应拦截器

const instance :AxiosInstance = axios.create({
  baseURL: 'https://127.0.0.1',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// 添加请求拦截器
instance.interceptors.request.use(requestInterceptor.success, requestInterceptor.fail)

// 添加响应拦截器
instance.interceptors.response.use(responseInterceptor.success, responseInterceptor.fail)

export default instance
