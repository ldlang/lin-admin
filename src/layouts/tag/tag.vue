<script setup lang="ts">
import useCommomStore from '@/store/modules/common'
import type { TabsPaneContext } from 'element-plus'
const { tagList, activeTag } = toRefs(useCommomStore())
const router = useRouter()

// 当前激活的标签
const activePath = ref('')
// 鼠标右键点击时的位置
const mousePosition = ref<{ x: string, y: string }>({
  x: '0',
  y: '0'
})

const rightClickMenuShow = ref(false)

watch(activeTag, (val)=> {
  activePath.value = val.fullPath
}, { immediate: true })

// 点击tag
function tagHandleClick(tab: TabsPaneContext) {
  const tag = findTag(tab.paneName as string)
  router.push({
    path: tag!.fullPath,
    query: tag?.query
  })
}

function findTag(fullPath: string) {
  return tagList.value.find(item=> item.fullPath === fullPath)
}

// 鼠标右键点击事件
function tagContextmenu(event: MouseEvent) {
  // 阻止鼠标右键默认行为
  event.preventDefault()
  // 阻止事件冒泡
  event.stopPropagation()
  // 记录鼠标位置
  mousePosition.value = {
    x: event.clientX + 'px',
    y: event.clientY + 'px'
  }
  // console.log(mousePosition.value)

  rightClickMenuShow.value = true
}
</script>

<template>
  <div class="top-tag w-full">
    <el-tabs
      v-model="activePath"
      type="card"
      @contextmenu="tagContextmenu"
      @tab-click="tagHandleClick">
      <template v-for="(item, index) in tagList" :key="index">
        <el-tab-pane
          :closable="item.fullPath !== '/home'"
          :label="item.title"
          :name="item.fullPath" />
      </template>
    </el-tabs>

    <div v-if="rightClickMenuShow" class="contextmenu fixed w-76 bg-white rd-5 z-10 hand flex flex-col ">
      <div class="p-5 b-b-1 text-center b-b-gray-200 b-b-solid hover-bg-eee">关闭其他</div>
      <div class="p-5 text-center hover-bg-eee">关闭所有</div>
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
  opacity: 1;
  border: 1px solid #ccc;
  border-top-left-radius: 0;
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
