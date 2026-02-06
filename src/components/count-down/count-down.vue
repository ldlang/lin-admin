<script setup lang="ts">
import { ICountDownProps, ICountDownEmit } from './type'

const props = withDefaults(defineProps<ICountDownProps>(), {
  text: '发送验证码',
  time: 60
})

const emit = defineEmits<ICountDownEmit>()

let timer: any = null
const isDisabled = ref(false)
const countTime = ref(Number(props.time))

function countDownClick() {
  if (!timer) {
    emit('onStart')
    isDisabled.value = true
    timer = setInterval(()=> {
      if (countTime.value > 0 && countTime.value <= Number(props.time)) {
        countTime.value--
      } else {
        resetTime()
      }
    }, 1000)
  }
}

// 倒计时结束重置倒计时
function resetTime() {
  isDisabled.value = false
  countTime.value = Number(props.time)
  clearInterval(timer)
  timer = null
  emit('onEnd')
}

</script>

<template>
  <div class="inline-block" :class="{'cursor-not-allowed': isDisabled}">
    <div class="inline-block"
      :class="[baseClass, isDisabled ? 'pointer-events-none' : 'cursor-pointer text-primary']"
      @click="countDownClick">
      {{ isDisabled ? countTime + 's' : text }}
    </div>
  </div>
</template>
