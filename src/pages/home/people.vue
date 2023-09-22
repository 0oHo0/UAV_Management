<template>
    <div class="top">
        <div class="demo-input-size">
            <el-input v-model="input2" class="w-50 m-2" placeholder="学生姓名" :suffix-icon="Search" />
        </div>
        <el-button type="primary" class="add" @click="handleClick">
            新增&#160;
            <el-icon>
                <CirclePlus />
            </el-icon>
        </el-button>
    </div>
    <el-table :data="tableData" size="large" style="width: 100%;" stripe class="table">
        <el-table-column fixed prop="name" label="姓名🧑🏻‍🎓" width="100" align="center" />
        <el-table-column prop="number" label="无人机序号✈️" width="240" align="center" />
        <el-table-column prop="phone" label="电话📞" width="220" align="center" />
        <el-table-column prop="stuId" label="学号" width="350" align="center" />
        <el-table-column prop="type" label="无人机类型" width="200" align="center" />
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
        <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled"
            :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
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
        type: 'CA 90036',
    },
    {
        name: '同学A',
        number: 'RD-008',
        phone: '17105891711',
        stuId: '2020329623439',
        type: 'CA 90036',
    },
    {
        name: '同学A',
        number: 'RD-009',
        phone: '17105891711',
        stuId: '2020329623439',
        type: 'CA 90036',
    },
    {
        name: '同学A',
        number: 'FWD-004',
        phone: '17105891711',
        stuId: '2020329623439',
        type: 'CA 90036',
    },
    {
        name: '同学B',
        number: 'RD-010',
        phone: '15364488033',
        stuId: '2021323600032',
        type: 'CA 90036',
    },
    {
        name: '同学B',
        number: 'FWD-005',
        phone: '15364488033',
        stuId: '2021323600032',
        type: 'CA 90036',
    },
    {
        name: '同学C',
        number: 'FWD-006',
        phone: '15314453484',
        stuId: '2022323604615',
        type: 'CA 90036',
    },
    {
        name: '同学D',
        number: 'RD-011',
        phone: '15703458102',
        stuId: '2023342501149',
        type: 'CA 90036',
    },
    {
        name: '同学E',
        number: 'FWD-007',
        phone: '13352505255',
        stuId: '2020234203457',
        type: 'CA 90036',
    },
]
const currentPage3 = ref(1)
const pageSize3 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}
</script>
  
<style scoped>
.top {
    margin-top: 10px;
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