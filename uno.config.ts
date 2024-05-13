import { defineConfig, presetAttributify, presetUno, transformerVariantGroup, transformerDirectives } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  rules: [
    ['hand', { 'cursor': 'pointer' }]
  ],
  theme: {
    colors: {
      primary: '#409EFF',
      secondary: '#F56C6C',
      success: '#67C23A',
      info: '#909399',
      warning: '#E6A23C',
      danger: '#F56C6C',
      white: '#FFFFFF',
      black: '#000000',
      main: '#FEFEFE', // 主颜色
      ccc: '#ccc',
      ddd: '#ddd',
      eee: '#eee',
      f4: '#f4f4f4',
      fff: '#ffffff'
    }
  },
  transformers: [
    // 指令插件 @apply text-center my-0 font-medium;
    transformerDirectives(),
    // 分组写法插件 <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
    transformerVariantGroup()
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    })
  ]
})
