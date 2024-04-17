import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mockLogin from './mock-login/mock-login'

export function setupProdMockServer(val:string) {
  console.log('执行了mock', val)
  createProdMockServer([...mockLogin])
}
