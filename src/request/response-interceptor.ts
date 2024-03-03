import type { AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/userStore'
const store = useUserStore()

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
    const router = useRouter()
    const data = error?.response?.data
    // 500 错误码处理
    if (data?.code === 500) {
      ElMessage.error(data?.msg)
    }
    // 401 错误码处理
    if (data?.code === 401) {
      ElMessage.error(data?.msg)
      router.push('/login')
      store.token = ''
    }
    return Promise.reject(data)
  }
}

export default requestInterceptor
