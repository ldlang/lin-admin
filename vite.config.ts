import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite配合eslint的包
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite' // 引入vite自动导入api
import Components from 'unplugin-vue-components/vite' // 引入vite自动导入组件的包
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // eslint插件
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    // WindiCSS插件
    WindiCSS(),
    // api自动导入
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // 生成的文件名和位置
      dts: 'src/declare-auto/auto-import.d.ts'
    }),
    // 组件自动导入,
    Components({
      // 要搜索组件的目录,设置的目录下的组件会自动导入
      dirs: ['src/components'],
      // 组件有效扩展名
      extensions: ['vue'],
      // 生成的文件名和位置
      dts: 'src/declare-auto/components.d.ts'
    })
  ],
  // 别名配置
  resolve: {
    alias: {
      // 根路径配置
      '~': resolve(__dirname, './'),
      // src路径配置
      '@': resolve(__dirname, './src')
    }
  }
})
