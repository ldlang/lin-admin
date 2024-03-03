import type { AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'

const requestInterceptor = {
  /**
 * 请求成功
 */
  success: (response: AxiosResponse)=> {
    const data = response?.data || {}
    console.log(2222, data)

    return Promise.resolve(data)
  },
  /**
 * 请求失败
 */
  fail: (error: AxiosError<IResult<string>>)=> {
    const data = error?.response?.data
    if (data?.code === 500) {
      ElMessage.error(data?.msg)
    }
    return Promise.reject(data)
  }
}

export default requestInterceptor
