<script lang="ts" setup>
import { ElAutocomplete } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { IMenuList, IMenuItem } from '@/api'
const { menuList } = useUserStore()
const router = useRouter()

const state = ref('')
interface IMenus {
  path: string
  title: string
}
const meuns = ref<Array<IMenus>>([]);

// 格式化菜单
(function() {
  const formatMenusFun = (menu: IMenuList)=> {
    menu.forEach((item:IMenuItem)=> {
      if (item.children?.length > 0) {
        formatMenusFun(item.children)
      } else {
        if (item.meta.isSearch) {
          meuns.value?.push({
            path: item.path,
            title: item.meta.title as string
          })
        }
      }
    })
  }
  formatMenusFun(toValue(menuList))
})()

// 设置搜索建议列表
function handleSuggestionsList(keyword: string, cb: any) {
  const menu = meuns.value.filter((item: IMenus)=> {
    return item.title.includes(keyword)
  })
  cb(menu)
}

// todo: 组件选中目标时回报警告 Invalid event arguments: event validation failed for event "update:modelValue"
const autocomplete = ref <InstanceType<typeof ElAutocomplete>>()
function handleSelectClick(item: unknown) {
  state.value = ''
  const { path } = item as IMenus
  router.push(path)
  autocomplete.value?.blur()
}
</script>

<template>
  <div>
    <el-autocomplete
      v-model="state"
      ref="autocomplete"
      :fetch-suggestions="handleSuggestionsList"
      placeholder="请输入关键字进行搜索"
      @select="handleSelectClick">
      <template #default="{ item }">
        <div class="flex flex-justify-between">
          <div class="fw-bold">{{ item.title }}</div>
          <span class="text-10">{{ item.path }}</span>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.el-input__wrapper){
  box-shadow: none;
  background: transparent;
  input::-webkit-input-placeholder{ /*WebKit browsers*/
    color: #FEFEFE;
  }
  input::-moz-input-placeholder{ /*Mozilla Firefox*/
    color: #FEFEFE;
  }
  input::-ms-input-placeholder{ /*Internet Explorer*/
    color: #FEFEFE;
  }
}

</style>
