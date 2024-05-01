import { MockMethod } from 'vite-plugin-mock'
import { crudData } from '../const/crud-data.ts'

export default [
  {
    url: '/crud/getList',
    method: 'get',
    response: ({ query })=> {
      let records = crudData
      if (query.name) {
        records = crudData.filter(item=> item.name.includes(query.name))
      }
      if (query.phone) {
        records = crudData.filter(item=> item.phone.includes(query.phone))
      }
      return {
        code: 200,
        data: {
          total: records.length,
          records: records.slice((query.page - 1) * query.size, query.size * query.page),
          leave: records.length - (query.size * query.page)
        }
      }
    }
  }
] as MockMethod[]

