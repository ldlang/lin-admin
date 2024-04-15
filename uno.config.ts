import { defineConfig, presetAttributify, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
// 分组写法插件 <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
import transformerVariantGroup from '@unocss/transformer-variant-group'
// 指令插件 @apply text-center my-0 font-medium;
import transformerDirectives from '@unocss/transformer-directives'

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
      eee: '#eee'
    }
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    })
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ]
})
