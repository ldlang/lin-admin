import { createApp } from 'vue'
import App from './App.vue'
// windicss插件
import 'virtual:windi.css'
// 引入normalize样式库
import 'normalize.css/normalize.css'

const app = createApp(App)

app.mount('#app')
