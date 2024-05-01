<script lang="ts" setup>
import { getListApi, type ICrudList, ICrudApiParams } from '@/api'
import type { ISearchForm } from './type'
import { isEmpty } from 'lodash-es'
const headerSearch = defineAsyncComponent(()=> import('./header-search.vue'))
const bottomPage = defineAsyncComponent(()=> import('./bottom-page.vue'))

// 表格数据
const tableData = ref<ICrudList>([])
// 表格数据总数
const total = ref(0)
// 表格loading
const tableLoading = ref(false)
// 请求参数
const getParams = reactive({
  page: 1,
  size: 10
})

onMounted(()=> {
  getTableData(getParams)
})

// 获取列表数据
async function getTableData(params: ICrudApiParams) {
  try {
    tableLoading.value = true
    const data = await getListApi(params)
    tableLoading.value = false
    tableData.value = data.data.records
    total.value = data.data.total
  } catch (err) {
    tableLoading.value = false
    console.error(err)
  }
}

// 搜索
function submitClick(searchForm: ISearchForm) {
  let key: keyof ISearchForm
  for (key in searchForm) {
    if (isEmpty(searchForm[key])) delete searchForm[key]
  }
  getParams.page = 1
  const params: ICrudApiParams & ISearchForm = {
    ...getParams,
    ...searchForm
  }
  getTableData(params)
}

// 重置搜索
function resetSearchClick() {
  getParams.page = 1
  getTableData(getParams)
}

// 分页改变
function pageChange() {
  getTableData(getParams)
}

function deleteClick() {
  console.log('deleteClick')
}
function editClick() {
  console.log('editClick')
}
</script>

<template>
  <!-- 搜索 -->
  <header-search @submitClick="submitClick" @resetSearchClick="resetSearchClick" />
  <!-- 表格 -->
  <el-table
    :data="tableData"
    v-loading="tableLoading"
    class="w-full rd-5">
    <el-table-column fixed type="selection" width="30" />
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="age" label="年龄" width="80" />
    <el-table-column prop="gender" label="性别" width="80" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="phone" label="手机号" />
    <el-table-column prop="address" label="地址" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default>
        <el-button link type="primary" size="small" @click="editClick">编辑</el-button>
        <el-button link type="danger" size="small" @click="deleteClick"> 删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div class="mt-10 bg-white py-5 rd-5">
    <bottom-page
      v-model:currentPage="getParams.page"
      v-model:pageSize="getParams.size"
      :total="total"
      @pageChange="pageChange" />
  </div>

</template>
