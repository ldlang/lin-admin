<script setup lang="ts">
import useCommonStore from '@/store/modules/common'
import { isEmpty } from 'lodash-es'
import type { TabsPaneContext, TabPaneName } from 'element-plus'
import { onClickOutside } from '@vueuse/core'
const { tagList, activeTag } = toRefs(useCommonStore())
const router = useRouter()
// 首页路径
const HOME_PATH = '/home'
// 当前激活的标签
const activePath = ref('')
// 右键点击的tag的innerText，也就是tag的title
const rightClickMenuTitle = ref('')
// 鼠标右键点击时的位置
const mousePosition = ref<{ x: string, y: string }>({
  x: '0',
  y: '0'
})

// 是否显示右键菜单
const rightClickMenuShow = ref(false)

watch(activeTag, (val)=> {
  activePath.value = val.fullPath
}, { immediate: true })

// 点击tag
function tagHandleClick(tab: TabsPaneContext) {
  const tag = tagList.value.find(item=> item.fullPath === tab.paneName as string)
  router.push({
    path: tag!.fullPath,
    query: tag?.query
  })
}

// 鼠标右键点击事件
function tagContextmenu(event: MouseEvent) {
  rightClickMenuTitle.value = (event!.target as HTMLDivElement).innerText
  // 阻止鼠标右键默认行为
  event.preventDefault()
  // 阻止事件冒泡
  event.stopPropagation()
  // 记录鼠标位置
  mousePosition.value = {
    x: event.clientX + 'px',
    y: event.clientY + 'px'
  }
  rightClickMenuShow.value = true
}
// 点击了右键菜单的外部
const contextmenuRef = ref<HTMLDivElement | null>(null)
onClickOutside(contextmenuRef, ()=> {
  rightClickMenuShow.value = false
})

// 关闭单个
function tagRemoveClick(name: TabPaneName) {
  // 如果关闭的是当前激活的tag,那么跳转到上一个tag
  if (activePath.value === name) {
    const index = tagList.value.findIndex(item=> item.fullPath === name)
    if (index === -1) return
    activePath.value = tagList.value[index - 1].fullPath
    router.push({
      path: tagList.value[index - 1].fullPath,
      query: tagList.value[index - 1].query
    })
  }
  tagList.value = tagList.value.filter(item=> item.fullPath !== name)
}

// 关闭其他
function closeOtherClick() {
  rightClickMenuShow.value = false
  tagList.value = tagList.value.filter(item=> {
    if (!isEmpty(rightClickMenuTitle.value)) {
      return item.title === rightClickMenuTitle.value || item.fullPath === HOME_PATH
    } else {
      return item.fullPath === activePath.value || item.fullPath === HOME_PATH
    }
  })
  if (tagList.value.length === 2) {
    router.push({
      path: tagList.value[1].fullPath,
      query: tagList.value[1].query
    })
  } else {
    router.push(HOME_PATH)
  }
}

// 关闭所有
function closeAllClick() {
  rightClickMenuShow.value = false
  tagList.value = tagList.value.filter(item=> item.fullPath === HOME_PATH)
  router.push(HOME_PATH)
}
</script>

<template>
  <div class="top-tag w-full bg-white" style="box-shadow: 0 1px 1px #eee;">
    <el-tabs
      v-model="activePath"
      type="card"
      @contextmenu="tagContextmenu"
      @tab-click="tagHandleClick"
      @tab-remove="tagRemoveClick">
      <template v-for="(item, index) in tagList" :key="index">
        <el-tab-pane
          :closable="item.fullPath !== HOME_PATH"
          :label="item.title"
          :name="item.fullPath" />
      </template>
    </el-tabs>

    <div v-if="rightClickMenuShow" ref="contextmenuRef"
      class="contextmenu fixed w-76 bg-white rd-3 z-10 hand flex flex-col shadow-lg">
      <div class="p-5 b-b-1 text-center b-b-gray-200 b-b-solid hover-bg-eee"
        @click="closeOtherClick">
        关闭其他
      </div>
      <div class="p-5 text-center hover-bg-eee" @click="closeAllClick">关闭所有</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-tag{
  height: $top-tag-height;
}

.contextmenu{
  top: v-bind('mousePosition.y');
  left: v-bind('mousePosition.x');
  /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影颜色 */
  box-shadow:
    -2px 0 2px rgba(0, 0, 0, 0.2),
    2px 0 2px rgba(0, 0, 0, 0.2),
    0 -2px 2px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.2);
}

::v-deep(.el-tabs){
  height: $top-tag-height;
  line-height: $top-tag-height;
  .el-tabs__header{
    margin: 0;
  }

  .el-tabs__header{
    border-bottom: none;
    height: $top-tag-height;
    line-height: $top-tag-height;
  }
  .el-tabs__item, .el-tabs__nav-next, .el-tabs__nav-prev {
    height: $top-tag-height;
    line-height: $top-tag-height;
  }
  .el-tabs__item{
    padding: 0 15px;
  }
  .el-tabs__nav{
    border: none;
  }
  .is-active{
    padding: 0 15px !important;
    border-bottom: 2px solid $primary !important;
  }
}
</style>
