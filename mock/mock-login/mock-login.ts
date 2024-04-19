import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/users/login',
    method: 'post',
    response: ()=> {
      return {
        code: 200,
        data: {
          token: 'true'
        }
      }
    }
    // 读取body参数的方式
    // rawResponse: async(req, res)=> {
    //   let reqbody = ''
    //   await new Promise((resolve)=> {
    //     req.on('data', (chunk)=> {
    //       reqbody += chunk
    //     })
    //     req.on('end', ()=> resolve(undefined))
    //   })
    //   res.setHeader('Content-Type', 'text/plain')
    //   res.statusCode = 200
    //   console.log('reqbody', reqbody)
    //   res.end(`hello, ${reqbody}`)
    // }
  }
] as MockMethod[]

