import { MockMethod } from 'vite-plugin-mock'
import { menuAllList } from '../const/menuInfo'
export default [
  {
    url: '/users/user-info',
    method: 'get',
    response: (res:any)=> {
      if (res.headers.authorization === 'Bearer true') {
        return {
          code: 200,
          data: {
            id: 1,
            code: 'code',
            account: 'super',
            password: 'd4IQt0MKAcI2nvpUGTSVOw==',
            name: '林达浪',
            avatar: 'https://ldlang.github.io/lin-note/avatar.jpg',
            email: '1',
            phone: 'mY5kOFKKMTlSya9V8UzkiA==',
            birthday: null,
            note: '备注',
            sex: 1,
            status: 1,
            realName: '林达浪',
            roleId: null,
            deptId: null,
            postId: null,
            createUser: null,
            createDept: null,
            createTime: '2024-02-28 21:40:54',
            updateUser: null,
            updateTime: '2024-03-04 19:38:40',
            isDeleted: 1
          }
        }
      } else {
        return {
          code: 403,
          msg: '登录失败！',
          data: {
            message: '登录失败！'
          }
        }
      }
    }
  },
  {
    url: '/users/menus',
    method: 'get',
    response: ({ query })=> {
      return {
        code: 200,
        msg: '成功',
        data: query.account === 'super' ? menuAllList : []
      }
    }
  }
] as MockMethod[]

