<script setup lang="ts">
import { isEmpty } from 'lodash'
import useCommonStore from '@/store/modules/common'
const { theme } = toRefs(useCommonStore())

interface IThemeItem {
  value: string
  label: string
}

const themeList: Array<IThemeItem> = [
  {
    value: 'default',
    label: '默认主题'
  },
  {
    value: 'colorful',
    label: '炫彩主题'
  },
  {
    value: 'dark',
    label: '暗黑主题'
  }
]
// 如果已经选择了主题,那么就使用已有的主题
watch(theme, (newVal)=> {
  if (!isEmpty(newVal)) {
    setTheme(newVal)
  }
}, { immediate: true })
// 主题单选
const themeRadio = ref(theme.value)
// 弹框显隐
const themeDialogVisible = ref(false)
// 打开主题弹框
function themeClick() {
  themeDialogVisible.value = true
}
// 选中主题
function dialogConfirmClick() {
  themeDialogVisible.value = false
  theme.value = themeRadio.value
  if (!isEmpty(themeRadio.value)) {
    setTheme(themeRadio.value)
  }
}

function setTheme(theme: string) {
  document.documentElement.className = toValue(theme)
}
</script>

<template>
  <div class="mr-20 w-20 h-20">
    <el-tooltip content="主题" placement="bottom">
      <i class="iconfont icon-zhuti_yifu text-20 hand" @click="themeClick" />
    </el-tooltip>
  </div>

  <el-dialog
    v-model="themeDialogVisible"
    title="主题切换"
    width="500"
    align-center>
    <el-radio-group v-model="themeRadio" class="w-full">
      <el-radio
        v-for="(item, index) in themeList"
        :key="index"
        :value="item.value"
        :label="item.label"
        class="w-33%" />
    </el-radio-group>

    <template #footer>
      <el-button @click="themeDialogVisible = false">关闭</el-button>
      <el-button type="primary" @click="dialogConfirmClick">确定</el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
::v-deep(.el-radio) {
  margin-right: 0;
}
</style>
