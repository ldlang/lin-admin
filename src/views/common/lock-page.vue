<script setup lang="ts">
import dayjs from 'dayjs'

const nowTiem = ref(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
let timer: number | null = (null)
onMounted(()=> {
  getNowTime()
})

function getNowTime() {
  (timer as number) = setInterval(()=> {
    nowTiem.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
  return
}

onBeforeUnmount(()=> {
  clearInterval(timer as number)
  timer = null
})

</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="w-340 h-80 text-30 text-white bg-black text-center lh-80 rd-15">
      {{ nowTiem }}
    </div>
  </div>
  <star-bg />
</template>

<style lang="scss" scoped>
</style>
