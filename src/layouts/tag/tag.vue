<script setup lang="ts">
import useCommomStore from '@/store/modules/common'
import type { TabsPaneContext } from 'element-plus'
const { tagList, activeTag } = toRefs(useCommomStore())
const router = useRouter()

// 当前激活的标签
const activePath = ref('')

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
</script>

<template>
  <div class="top-tag w-full">
    <el-tabs
      v-model="activePath"
      type="card"
      @tab-click="tagHandleClick">
      <template v-for="(item, index) in tagList" :key="index">
        <el-tab-pane
          :closable="item.fullPath !== '/home'"
          :label="item.title"
          :name="item.fullPath" />
      </template>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.top-tag{
  height: $top-tag-height;
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
    border-left: none;
  }
  .el-tabs__nav{
    border: none;
  }
}
</style>
