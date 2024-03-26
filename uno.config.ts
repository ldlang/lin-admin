import { defineConfig, presetAttributify, presetUno } from 'unocss'
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
      main: '#FEFEFE' // 主颜色
    }
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    })
  ]
})
