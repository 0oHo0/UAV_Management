<template>
    <div class="top">
        <div class="demo-input-size">
            <el-input v-model="input2" class="w-50 m-2" placeholder="无人机序号" :suffix-icon="Search" />
        </div>
        <el-button type="primary" class="add" @click="dialogFormVisible = true">
            新增&#160;
            <el-icon>
                <CirclePlus />
            </el-icon>
        </el-button>
    </div>
    <el-table :data="tableData" size="large" style="width: 100%;" stripe class="table">
        <el-table-column fixed prop="number" label="无人机序号✈️" width="130" align="center" />
        <el-table-column prop="type" label="类型" width="200" align="center" />
        <el-table-column prop="photo" label="图片📷" width="150" align="center" />
        <el-table-column prop="address" label="存放地点🏫" width="200" align="center" />
        <el-table-column prop="time" label="最大租赁时间⏱️" width="200" align="center" />
        <el-table-column prop="status" label="状态" width="180" align="center">
            <template #default="scope">
                <span>{{ scope.row.status === 1 ? "在库" : '已借出' }}</span>
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作🕹️" min-width="150" align="center">
            <template #default="scope">
                <el-button type="primary" @click="borrowFormVisible = true" :disabled="scope.row.status === 0">
                    借出<el-icon class="el-icon--right">
                        <Upload />
                    </el-icon>
                </el-button>
                <el-button type="primary" @click="scope.row.status = 1" :disabled="scope.row.status === 1">
                    归还&#160;
                    <el-icon><Select /></el-icon>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled"
            :background="background" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>

    <el-dialog v-model="dialogFormVisible" title="新增无人机">
        <el-form :model="form" class="dialog">
            <el-form-item label="无人机序号" :label-width="formLabelWidth">
                <el-input v-model="form.number" autocomplete="off" />
            </el-form-item>
            <el-form-item label="无人机类型" :label-width="formLabelWidth">
                <el-input v-model="form.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="无人机照片" :label-width="formLabelWidth">
                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                    <el-icon>
                        <Picture />
                    </el-icon>
                    <template #file="{ file }">
                        <div>
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <el-icon><zoom-in /></el-icon>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <el-icon>
                                        <Download />
                                    </el-icon>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <el-icon>
                                        <Delete />
                                    </el-icon>
                                </span>
                            </span>
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="最大租赁时间" :label-width="formLabelWidth">
                <el-input v-model="form.time" placeholder="">
                    <template #append>/小时</template>
                </el-input>
            </el-form-item>
            <!-- <el-form-item label="存放地点" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item> -->
            <el-form-item label="存放地点" :label-width="formLabelWidth">
                <el-select v-model="form.address" placeholder="选择一个地点">
                    <el-option label="A校区-C栋-101" value="A校区-C栋-101" />
                    <el-option label="B校区-D栋-103" value="B校区-D栋-103" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

    <el-dialog v-model="borrowFormVisible" title="租借无人机" width="40%" class="borrowDialog">
        <el-form :model="form" class="dialog">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.stuId" autocomplete="off" />
            </el-form-item>
            <!-- <el-form-item label="存放地点" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item> -->
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="borrowFormVisible = false">取消</el-button>
                <el-button type="primary" @click="borrow">
                    借出
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script lang="ts" setup>
import { onScopeDispose, reactive, ref } from 'vue'
import { Delete, Download, Plus, ZoomIn, Search } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (file: UploadFile) => {
    console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
    console.log(file)
}
const dialogFormVisible = ref(false)
const borrowFormVisible = ref(false)
const formLabelWidth = '150px'

const form = reactive({
    name: '',
    phone: '',
    stuId: '',
    number: '',
    type: '',
    photo: '',
    time: '',
    address: ''
})

const input2 = ref('')
const handleClick = () => {
    console.log('click')
}

const borrow = () => {
    borrowFormVisible.value = false

}


const tableData = [
    {
        number: 'Rd-001',
        type: '旋翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'Rd-002',
        type: '旋翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'Fwd-001',
        type: '固定翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '48:00',
        status: 1,
    },
    {
        number: 'Fwd-002',
        type: '固定翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '48:00',
        status: 1,
    },
    {
        number: 'Rd-003',
        type: '旋翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'Rd-004',
        type: '旋翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'Fwd-003',
        type: '固定翼',
        photo: '',
        address: 'A校区-C栋-101',
        time: '48:00',
        status: 0
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

.borrowDialog {}

.dialog {
    padding: 0 150px 0 0;
}

.demo-pagination-block {
    margin-top: 10px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>