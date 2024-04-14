<script setup lang="ts">
import dayjs from 'dayjs'
import type { FormInstance, FormRules } from 'element-plus'
import { Decrypt } from '@/utils'
import useUserStore from '@/store/modules/user'
import useCommonStore from '@/store/modules/common'
const { logout } = toRefs(useUserStore())
const { lockPasswd, isLock, lockPath } = toRefs(useCommonStore())
const router = useRouter()

const nowTiem = ref(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
let timer: number | null = (null)
onMounted(()=> {
  getNowTime()
})

function getNowTime() {
  (timer as number) = window.setInterval(()=> {
    nowTiem.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
  return
}

onBeforeUnmount(()=> {
  clearInterval(timer as number)
  timer = null
})

// 密码是否可见
const isHide = ref(true)

interface ILockFrom {
  lockPasswd: string
}

const lockForm = reactive<ILockFrom>({
  lockPasswd: ''
})

const rules = reactive<FormRules<ILockFrom>>({
  lockPasswd: [{ required: true, message: '请输入解锁密码', trigger: 'blur' }]
})

// 登录按钮
const lockFormRef = ref<FormInstance>()
const submitLoginClick = async()=> {
  await lockFormRef.value?.validate(async valid=> {
    if (valid) {
      if (lockForm.lockPasswd === Decrypt(lockPasswd.value)) {
        lockPasswd.value = ''
        isLock.value = false
        router.push(lockPath.value)
        ElMessage.success('登录成功！')
      } else {
        ElMessage.error({ message: '密码错误！' })
      }
    } else {
      ElMessage.error({ message: '验证未通过！' })
    }
  })
}

const LogoutClick = async()=> {
  logout.value()
  router.replace('/login')
  ElMessage.success('退出成功！')
}
</script>

<template>
  <div class="flex justify-center items-center flex-col w-screen h-screen">
    <div class="w-340 h-80 text-30 text-white bg-black text-center lh-80 rd-15 mb-50">
      {{ nowTiem }}
    </div>
    <el-form
      ref="lockFormRef"
      :model="lockForm"
      :rules="rules"
      hide-required-asterisk
      class="w-340 text-center py-10"
      label-width="70px">
      <el-form-item label="解锁密码" prop="lockPasswd">
        <el-input size="large" :type="isHide ? 'password' : 'text'" v-model="lockForm.lockPasswd">
          <template #suffix>
            <el-icon class="cursor-pointer" @click="isHide = !isHide">
              <component :is="isHide ? 'Hide' : 'View'" />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 登录按钮 -->

      <el-button type="primary" size="large" class="w-full" @click="submitLoginClick">解 锁</el-button>
      <el-button type="primary" size="large" class="w-full mt-20" @click="LogoutClick">退出登录</el-button>
    </el-form>
  </div>
  <star-bg />
</template>

<style lang="scss" scoped>
::v-deep(.el-button+.el-button){
  margin-left: 0;
}
::v-deep(.el-form-item__label){
  color: #fff;
  background: #000;
}
</style>
