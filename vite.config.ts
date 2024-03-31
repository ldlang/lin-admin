import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite配合eslint的包
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite' // 引入vite自动导入api
import Components from 'unplugin-vue-components/vite' // 引入vite自动导入组件的包
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 引入vite自动导入element-plus组件的包
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // eslint插件
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    // UnoCSS插件
    UnoCSS(),
    // api自动导入
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      // 生成的文件名和位置
      dts: 'src/declare-auto/auto-import.d.ts',
      // element-plus组件自动导入
      resolvers: [ElementPlusResolver()]
    }),
    // 组件自动导入,
    Components({
      // 要搜索组件的目录,设置的目录下的组件会自动导入
      dirs: ['src/components'],
      // 组件有效扩展名
      extensions: ['vue'],
      // 生成的文件名和位置
      dts: 'src/declare-auto/components.d.ts',
      // element-plus组件自动导入
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      // scss配置
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/common-style/index.scss";'
      }
    }
  },
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
