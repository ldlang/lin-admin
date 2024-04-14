import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/login',
    method: 'get',
    response: ()=> {
      return {
        code: 200,
        data: {
          name: '请求成功111'
        }
      }
    }
  }
] as MockMethod[]

