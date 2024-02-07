import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite配合eslint的包
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    vue(),
    // eslint插件
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    // WindiCSS插件
    WindiCSS()
  ],
  // 别名配置
  resolve: {
    // 配置路径别名
    alias: {
      '@': '/src'
    }
  }
})
