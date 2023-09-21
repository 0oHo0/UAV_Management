<template>
    <div class="top">
        <div class="demo-input-size">
            <el-input v-model="input2" class="w-50 m-2" placeholder="无人机序号" :suffix-icon="Search" />
        </div>
        <el-button type="primary" class="add" @click="handleClick">
            新增&#160;
            <el-icon>
                <CirclePlus />
            </el-icon>
        </el-button>
    </div>
    <el-table :data="tableData" size="large" style="width: 100%;" stripe class="table">
        <el-table-column fixed prop="number" label="无人机序号✈️" width="130" align="center" />
        <el-table-column prop="time" label="租赁时间⏱️" width="200" align="center" />
        <el-table-column prop="remainder" label="剩余时间⏱️" width="220" align="center" />
        <el-table-column prop="address" label="归还地点🏫" width="400" align="center" />
        <el-table-column prop="name" label="租赁人员🧑🏻‍🎓" width="180" align="center" />
        <el-table-column fixed="right" label="操作🕹️" min-width="120" align="center">
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
        number: 'TOM',
        time: 'California',
        remainder: '56:32',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学A',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学A',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学A',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学A',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学B',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学B',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学C',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学D',
    },
    {
        number: 'Tom',
        time: 'California',
        remainder: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        name: '同学E',
    }
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