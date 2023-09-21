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
        <el-table-column fixed prop="date" label="无人机序号✈️" width="130" align="center"/>
        <el-table-column prop="name" label="类型" width="200" align="center"/>
        <el-table-column prop="state" label="图片📷" width="220" align="center"/>
        <el-table-column prop="address" label="存放地点🏫" width="400" align="center"/>
        <el-table-column prop="zip" label="状态" width="200" align="center"/>
        <el-table-column fixed="right" label="操作🕹️" min-width="100" align="center">
            <template #default>
                <el-button type="primary" @click="handleClick">
                    借出<el-icon class="el-icon--right">
                        <Upload />
                    </el-icon>
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
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
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