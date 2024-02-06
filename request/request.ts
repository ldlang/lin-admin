import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios'

const instance :AxiosInstance = axios.create({
  baseURL: 'https://127.0.0.1',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// // 添加请求拦截器
instance.interceptors.request.use((config: InternalAxiosRequestConfig)=> {
  // 在发送请求之前做些什么
  return config
}, function(error:AxiosError) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response: AxiosResponse)=> {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function(error:AxiosError) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
