import { createApp } from 'vue'
import App from './App.vue'
// vue-router插件
import router from './router'
// vue-router权限插件
import './router/permission'
// pinia插件
import pinia from './store'
// windicss插件
import 'virtual:windi.css'
// 引入normalize样式库
import 'normalize.css/normalize.css'
// element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// vue-router插件
app.use(router)
// pinia插件
app.use(pinia)
// element-plus插件
app.use(ElementPlus)
// element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
