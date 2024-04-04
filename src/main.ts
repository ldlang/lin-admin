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
// element-plus插件
import 'element-plus/dist/index.css'
// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import useUserStore from './store/modules/user'

const app = createApp(App)
// pinia插件
app.use(pinia)
// 添加动态路由,必须在pinia注册只后，和router注册之前
useUserStore().addMenuRoutes()
// vue-router插件
app.use(router)

// element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
