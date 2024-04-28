import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mockLogin from './mock-login/mock-login'
import mockUser from './mock-user/mock-user'
import mockCrud from './mock-crud/mock-crud'

export function setupProdMockServer() {
  createProdMockServer([...mockLogin, ...mockUser, ...mockCrud])
}
