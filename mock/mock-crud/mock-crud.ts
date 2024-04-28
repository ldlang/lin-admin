import { MockMethod } from 'vite-plugin-mock'
import { crudData } from '../const/crud-data.ts'

export default [
  {
    url: '/crud/getList',
    method: 'get',
    response: ({ query })=> {
      return {
        code: 200,
        data: {
          total: 20,
          records: crudData.slice((query.page - 1) * query.size, query.size),
          leave: 20 - (query.size * query.page)
        }
      }
    }
  }
] as MockMethod[]

