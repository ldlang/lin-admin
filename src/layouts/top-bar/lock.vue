<script setup lang="ts">
import { Encrypt } from '@/utils'
import useCommonStore from '@/store/modules/common'
const { isLock, lockPasswd, lockPath } = storeToRefs(useCommonStore())
const router = useRouter()
const route = useRoute()

function lockClick() {
  ElMessageBox.prompt('请输入锁屏密码', '提示', {
    confirmButtonText: '锁屏',
    cancelButtonText: '取消',
    // 对输入的内容进行判空验证
    inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
    inputErrorMessage: '锁屏密码不能为空'
  }).then(({ value })=> {
    lockPasswd.value = Encrypt(value)
    isLock.value = true
    lockPath.value = route.fullPath
    router.push('/lock-page')
    ElMessage.success('锁屏成功')
  }).catch(()=> {})
}

</script>

<template>
  <div class="w-20 h-20 mx-10 flex justify-center items-center hover:scale-130">
    <el-tooltip content="锁屏" placement="bottom">
      <i class="iconfont icon-suoding text-20 hand" @click="lockClick" />
    </el-tooltip>
  </div>
</template>
