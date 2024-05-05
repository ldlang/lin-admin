import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite配合eslint的包
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite' // 引入vite自动导入api
import Components from 'unplugin-vue-components/vite' // 引入vite自动导入组件的包
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 引入vite自动导入element-plus组件的包
import { visualizer } from 'rollup-plugin-visualizer' // 引入打包体积分析的包
// 压缩打包文件体积的包，要配合nginx配置静态资源代理才有用
import { compression } from 'vite-plugin-compression2'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import { buildConfig } from './vite-plugin/build'

export default defineConfig({
  base: '/lin-admin/',
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
    }),
    // 打包产物分析
    visualizer({
      open: false,
      filename: 'visualizer.html' // 分析图生成的文件名
    }),
    // 打包压缩
    compression({
      threshold: 2000, // 设置只有超过 2k 的文件才执行压缩
      deleteOriginalAssets: false, // 设置是否删除原文件
      skipIfLargerOrEqual: true // 如果压缩后的文件大小与原文件大小一致或者更大时，不进行压缩
    }),
    viteMockServe({
      mockPath: 'mock', // 指向mock下的文件
      watchFiles: true, // 监听文件内容变更
      localEnabled: true,
      prodEnabled: true,
      logger: true
    })
  ],
  build: buildConfig(),
  css: {
    preprocessorOptions: {
      // scss配置
      scss: {
        javascriptEnabled: true,
        additionalData: '@use "./src/common-style/color.scss" as *; @use "./src/common-style/size.scss" as *;'
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
