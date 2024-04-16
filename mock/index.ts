import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mockLogin from './mock-login/mock-login'

export function setupProdMockServer() {
  createProdMockServer([...mockLogin])
}
