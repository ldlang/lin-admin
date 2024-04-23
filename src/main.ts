import { createApp } from 'vue'
import App from './App.vue'
// iconfont
import '@/assets/iconfont/iconfont.css'
// pinia插件
import pinia from './store'
// vue-router插件
import router from './router'
// vue-router权限插件
import './router/permission'
// unocss插件
import 'virtual:uno.css'
// 引入normalize样式库
import 'normalize.css/normalize.css'
// 样式
import './common-style/index.scss'
// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// element-plus样式
import 'element-plus/dist/index.css'

// 打包后启动mock
import { setupProdMockServer } from '../mock/index'
if (import.meta.env.PROD) {
  setupProdMockServer()
}

const app = createApp(App)
// pinia插件
app.use(pinia)
// element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount('#app')

