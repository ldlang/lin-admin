import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化插件，默认所有store都开启持久化
pinia.use(
  createPersistedState({
    auto: true
  })
)

export * from './modules/user'
export * from './modules/common'
export default pinia
