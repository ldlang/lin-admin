<script lang="ts" setup>
import { getListApi, type ICrudList, ICrudApiParams } from '@/api'

const tableData = ref<ICrudList>([])
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
    const data = await getListApi(params)
    tableData.value = data.data.records
  } catch (err) {
    console.error(err)
  }
}

function deleteClick() {
  console.log('deleteClick')
}
function editClick() {
  console.log('editClick')
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
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
        <el-button type="primary" size="small" @click="editClick">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteClick"> 删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
