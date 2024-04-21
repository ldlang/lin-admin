<template>
  <canvas
    id="ctx"
    :width="windowSize.width"
    :height="windowSize.height"
    class="star" />
</template>

<script setup>
import { debounce } from 'lodash-es'
// 画布尺寸设置
const windowSize = reactive({
  height: 0,
  width: 0
})

onMounted(()=> {
  // 监听可视窗口尺寸变化
  window.addEventListener('resize', changeSize)
  windowSize.height = window.innerHeight || document.documentElement.clientHeight
  windowSize.width = window.innerWidth || document.documentElement.clientWidth
  getCtx()
})

// 移除监听窗口尺寸变化
onBeforeUnmount(()=> {
  window.removeEventListener('resize', changeSize)
})

// 修改画布尺寸
function changeSize() {
  windowSize.height = window.innerHeight
  windowSize.width = window.innerWidth
  debounce(()=> getCtx(), 500, { trailing: true })()
}

// 绘制画布
function getCtx() {
  const canvas = document.getElementById('ctx')
  const ctx = canvas.getContext('2d')
  ctx.beginPath() // 开始绘制
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, windowSize.width, windowSize.height)
  ctx.closePath() // 结束绘制
  canvasStar(ctx)
}

// 生成随机star
let circles = [] // 存储所有圆点的数组
function canvasStar(ctx) {
  circles = []
  // 随机生成50到300个
  const randomNum = Math.floor(Math.random() * 300) + 50
  for (let i = 0; i < randomNum; i++) {
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    const x = parseInt(Math.random() * windowSize.width)
    const y = parseInt(Math.random() * windowSize.height)
    const r = parseInt(Math.random() * 3)
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath() // 结束绘制

    // 将圆点信息存储在数组中
    circles.push({ x, y, r })
  }
  animate(ctx) // 开始动画
}

// 给star增加闪烁效果
function animate(ctx) {
  ctx.clearRect(0, 0, windowSize.width, windowSize.height) // 清除画布
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, windowSize.width, windowSize.height)
  // 更新并重新绘制每个圆点
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i]
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()

    // 改变半径以产生闪烁效果
    circle.r = Math.abs(Math.sin(Date.now() / 1000 + i)) * 3
  }
  requestAnimationFrame(()=> animate(ctx)) // 请求下一帧动画
}
</script>

<style lang="scss" scoped>
.star {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
