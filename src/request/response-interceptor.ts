import type { AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import router from '@/router'

const requestInterceptor = {
  /**
   * 请求成功
   */
  success: (response: AxiosResponse)=> {
    const data = response?.data || {}
    errCodeHandler(data)
    return Promise.resolve(data)
  },
  /**
   * 请求失败
   */
  fail: (error: AxiosError<IResult<string>>)=> {
    const data = error?.response?.data
    errCodeHandler(data)
    return Promise.reject(data)
  }
}

function errCodeHandler(data: IResult<string> | undefined) {
  const store = useUserStore()
  // 500 错误码处理
  if (data?.code === 500) {
    ElMessage.error(data?.msg)
  }
  // 403 错误码处理
  if (data?.code === 403) {
    router.push('/login')
    store.token = ''
    ElMessage.error(data?.msg)
  }
}

export default requestInterceptor
