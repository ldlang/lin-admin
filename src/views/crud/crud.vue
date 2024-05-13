<script lang="ts" setup>
import { getListApi, type ICrudList, ICrudApiParams, ICrudItem } from '@/api'
import type { ISearchForm } from './type'
import { isEmpty } from 'lodash-es'
import { ElTable } from 'element-plus'
const headerSearch = defineAsyncComponent(()=> import('./header-search.vue'))
const bottomPage = defineAsyncComponent(()=> import('./bottom-page.vue'))
const crudForm = defineAsyncComponent(()=> import('./crud-form.vue'))

const tableRef = ref<InstanceType<typeof ElTable> | null>(null)
const pageRef = ref<InstanceType<typeof bottomPage> | null>(null)
const crudFormRef = ref<InstanceType<typeof crudForm> | null>(null)
const tableHeight = ref<number | string>('auto')

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

onMounted(async()=> {
  await getTableData(getParams)
  setTimeout(()=> {
    computedTableHeight()
  }, 500)
})

// 获取列表数据
async function getTableData(params: ICrudApiParams) {
  try {
    tableLoading.value = true
    setTimeout(async()=> {
      const data = await getListApi(params)
      tableLoading.value = false
      tableData.value = data.data.records
      total.value = data.data.total
    }, 1000)
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

// 计算表格高度
function computedTableHeight() {
  const tableRefTop = tableRef.value?.$el.getBoundingClientRect().top
  const pageRefHetight = pageRef.value?.$el.getBoundingClientRect().height as number
  // 浏览器高度 - 表格顶部距离 - 分页高度 - 20 内容区的内边距 - 10 分页距离表格的距离
  const height = document.documentElement.clientHeight - tableRefTop - pageRefHetight - 20 - 10
  tableHeight.value = height
}
function deleteClick(row: ICrudItem) {
  ElMessageBox.confirm('确定删除吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async()=> {
    ElMessage.success(`id为${row.id}的数据删除成功删除成功`)
    getTableData(getParams)
  }).catch(()=> {})
}
function editClick(row: ICrudItem) {
  crudFormRef.value?.open(row)
}
</script>

<template>
  <!-- 搜索 -->
  <header-search @submitClick="submitClick" @resetSearchClick="resetSearchClick" :tableLoading="tableLoading" />
  <!-- 表格 -->
  <el-table
    :data="tableData"
    v-loading="tableLoading"
    class="w-full rd-5"
    ref="tableRef"
    :height="tableHeight">
    <el-table-column fixed type="selection" width="30" />
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="age" label="年龄" width="80" />
    <el-table-column prop="gender" label="性别" width="80" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="phone" label="手机号" />
    <el-table-column prop="address" label="地址" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="editClick(row)">编辑</el-button>
        <el-button link type="danger" size="small" @click="deleteClick(row)"> 删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <bottom-page
    ref="pageRef"
    class="mt-10 bg-white py-5 rd-5"
    v-model:currentPage="getParams.page"
    v-model:pageSize="getParams.size"
    :total="total"
    @pageChange="pageChange" />
  <!-- 表单 -->
  <crud-form ref="crudFormRef" @submitOk="getTableData(getParams)" />
</template>
