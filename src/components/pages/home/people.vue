<template>
<div class="container">
    <el-container>
      <el-aside width="200px" class="aside">
        <asid />  
      </el-aside>
      <el-container>
        <el-header>
          <top />
        </el-header>
        <el-main>
        <div class="body">
    <div class="top">
        <div class="demo-input-size">
            <el-input v-model="input2" class="w-50 m-2" placeholder="学生姓名" :suffix-icon="Search" />
        </div>
    </div>
    <el-table :data="ftableData()" size="large" style="width: 100%;" stripe class="table">
        <el-table-column fixed prop="name" label="姓名🧑🏻‍🎓" width="100" align="center" />
        <el-table-column prop="number" label="无人机编号✈️" width="240" align="center" />
        <el-table-column prop="phone" label="电话📞" width="220" align="center" />
        <el-table-column prop="stuId" label="学号" width="350" align="center" />
        <el-table-column prop="class" label="班级" width="200" align="center" />
        <el-table-column fixed="right" label="操作🕹️" min-width="100" align="center">
            <template #default>
                <el-button type="primary" @click="handleClick">
                    归还&#160;<el-icon><Select /></el-icon>
                </el-button>
                <!-- <el-button link type="primary" size="large">Edit</el-button> -->
            </template>
        </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
        <el-config-provider :locale="locale">
            <el-pagination v-model:current-page="page.currentPage" :page-size="page.pageSize" :page-sizes="[5, 10, 15, 20]"
                :small="false" :disabled="disabled" :background="true" layout="total, sizes, prev, pager, next, jumper"
                :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-config-provider>
    </div>
</div>  
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
let locale = zhCn;

const input2 = ref('')
const handleClick = () => {
    console.log('click')
}
const tableData = [
    {
        name: '同学A',
        number: 'RD-007',
        phone: '17105891711',
        stuId: '2020329623439',
        class: '机械202',
    },
    {
        name: '同学A',
        number: 'RD-008',
        phone: '17105891711',
        stuId: '2020329623439',
        class: '机械202',
    },
    {
        name: '同学A',
        number: 'RD-009',
        phone: '17105891711',
        stuId: '2020329623439',
        class: '机械202',
    },
    {
        name: '同学A',
        number: 'FWD-004',
        phone: '17105891711',
        stuId: '2020329623439',
        class: '机械202',
    },
    {
        name: '同学B',
        number: 'RD-010',
        phone: '15364488033',
        stuId: '2021323600032',
        class: '电子211',
    },
    {
        name: '同学B',
        number: 'FWD-005',
        phone: '15364488033',
        stuId: '2021323600032',
        class: '电子211',
    },
    {
        name: '同学C',
        number: 'FWD-006',
        phone: '15314453484',
        stuId: '2022323604615',
        class: '自动化221',
    },
    {
        name: '同学D',
        number: 'RD-011',
        phone: '15703458102',
        stuId: '2023342501149',
        class: '通信232',
    },
    {
        name: '同学E',
        number: 'FWD-007',
        phone: '13352505255',
        stuId: '2020234203457',
        class: '仪器201',
    },
]

const disabled = ref(false)

const page = reactive({
    currentPage: 1,
    pageSize: 5,
    total: tableData.length
})
const ftableData = () => {
    return tableData.filter(
        (item, index) =>
            index < page.currentPage * page.pageSize &&
            index >= page.pageSize * (page.currentPage - 1)
    );
};
const handleSizeChange = (e) => {
    page.currentPage = 1;
    page.pageSize = e;
    console.log(`${e} items per page`)
}
const handleCurrentChange = (e) => {
    console.log(`current page: ${e}`)
    page.currentPage = e;
}
</script>
  
<style scoped>
.container{
    height: 100vh;
    .aside{
      height: 100vh;
    }
    .body{
      padding: 5px;
    }
  }
.top {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add {
        margin-right: 20px;
    }
}

.demo-pagination-block {
    margin-top: 10px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>