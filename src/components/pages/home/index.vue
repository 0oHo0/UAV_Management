<template>
    <div class="container">
        <div class="top">
            <div class="demo-input-size">
                <el-input v-model="input2" class="w-50 m-2" placeholder="无人机编号" :suffix-icon="Search" />
            </div>
            <el-button type="primary" class="add" @click="dialogFormVisible = true">
                新增&#160;
                <el-icon>
                    <CirclePlus />
                </el-icon>
            </el-button>
        </div>
        <el-table :data="ftableData()" size="large" max-height="553" style="width: 100%;" stripe class="table">
            <el-table-column fixed prop="number" label="无人机编号✈️" width="130" align="center" />
            <el-table-column prop="type" label="类型" width="200" align="center" />
            <el-table-column prop="photo" label="图片📷" width="200" align="center">
                <template #default="scope">
                    <div style="display: inline-block;">
                        <el-image style="width: 70px;" fit="fill" :src="getImageUrl(scope.row.photo)"></el-image>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="存放地点🏫" width="200" align="center" />
            <el-table-column prop="time" label="最大租借时间⏱️" width="200" align="center" />
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
                </template>
            </el-table-column>
        </el-table>
        <div class="demo-pagination-block">
            <el-config-provider :locale="locale">
                <el-pagination v-model:current-page="page.currentPage" :page-size="page.pageSize"
                    :page-sizes="[5, 10, 15, 20]" :small="false" :disabled="disabled" :background="true"
                    layout="total, sizes, prev, pager, next, jumper" :total="tableTotal()" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </el-config-provider>
        </div>
        <el-dialog v-model="dialogFormVisible" title="新增无人机">
            <el-form :model="ruleFormRef" class="dialog" :rules="rules">
                <el-form-item label="无人机编号" :label-width="formLabelWidth" prop="number">
                    <el-input v-model="ruleForm.number" autocomplete="off" clearable="true" />
                </el-form-item>
                <el-form-item label="无人机类型" :label-width="formLabelWidth" prop="type">
                    <el-select v-model="ruleForm.type" placeholder="选择一个类型">
                        <el-option label="旋翼" value="旋翼" />
                        <el-option label="固定翼" value="固定翼" />
                    </el-select>
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
                                    <span v-if="!disabled" class="el-upload-list__item-delete"
                                        @click="handleDownload(file)">
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
                <el-form-item label="最大租赁时间" :label-width="formLabelWidth" prop="time">
                    <el-input v-model="ruleForm.time" placeholder="" clearable="true">
                        <template #append>/小时</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="存放地点" :label-width="formLabelWidth" prop="address">
                    <el-select v-model="ruleForm.address" placeholder="选择一个地点">
                        <el-option label="A校区-C栋-101" value="A校区-C栋-101" />
                        <el-option label="B校区-D栋-103" value="B校区-D栋-103" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">
                        新增
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>

        <el-dialog v-model="borrowFormVisible" title="租借无人机" width="40%" class="borrowDialog">
            <el-form ref="ruleFormRef" :model="ruleForm" class="dialog" :rules="rules">
                <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="ruleForm.name" autocomplete="off" clearable="true" />
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
                    <el-input v-model="ruleForm.phone" autocomplete="off" clearable="true" />
                </el-form-item>
                <el-form-item label="学号" :label-width="formLabelWidth" prop="stuId">
                    <el-input v-model="ruleForm.stuId" autocomplete="off" clearable="true" />
                </el-form-item>
                <!-- <el-form-item label="存放地点" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item> -->
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="borrowFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">借出</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { onScopeDispose, reactive, ref } from 'vue'
import { Delete, Download, Plus, ZoomIn, Search } from '@element-plus/icons-vue'
import type { UploadFile, FormRules, FormInstance } from 'element-plus'
import zhCn from "element-plus/es/locale/lang/zh-cn";
let locale = zhCn;

interface RuleForm {
    name: string
    type: string
    phone: string
    stuId: string
    number: string
    photo: string
    time: string
    address: string
}
const ruleFormRef = ref<FormInstance>()
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

const ruleForm = reactive<RuleForm>({
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

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            borrowFormVisible.value = false

        } else {
            console.log('error submit!')
            return false
        }
    })
}

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 3, max: 5, message: '请输入正确姓名', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' },
    ],
    stuId: [
        { required: true, message: '请输入学号', trigger: 'blur' },
        { min: 13, max: 13, message: '请输入正确的学号', trigger: 'blur' },
    ],
    number: [
        { required: true, message: '请输入无人机编号', trigger: 'blur' },
    ],
    time: [
        { required: true, message: '请输入租借时间', trigger: 'blur' },
    ],
    type: { required: true },
    address: { required: true }

})
const tableData = [
    {
        number: 'RD-001',
        type: '旋翼',
        photo: 'UAV.png',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'RD-002',
        type: '旋翼',
        photo: 'RD-002.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 1,
    },
    {
        number: 'FWD-001',
        type: '固定翼',
        photo: 'FWD-001.png',
        address: 'A校区-C栋-101',
        time: '48:00',
        status: 1,
    },
    {
        number: 'FWD-002',
        type: '固定翼',
        photo: 'FWD-002.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 1,
    },
    {
        number: 'RD-003',
        type: '旋翼',
        photo: 'RD-003.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 1,
    },
    {
        number: 'RD-004',
        type: '旋翼',
        photo: 'RD-004.png',
        address: 'A校区-C栋-101',
        time: '72:00',
        status: 1,
    },
    {
        number: 'FWD-003',
        type: '固定翼',
        photo: 'FWD-003.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 0
    },
    {
        number: 'FWD-004',
        type: '固定翼',
        photo: 'FWD-004.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 0
    },
    {
        number: 'FWD-005',
        type: '固定翼',
        photo: 'FWD-005.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 0
    },
    {
        number: 'FWD-006',
        type: '固定翼',
        photo: 'FWD-006.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 0
    },
    {
        number: 'FWD-007',
        type: '固定翼',
        photo: 'FWD-007.png',
        address: 'B校区-D栋-103',
        time: '48:00',
        status: 0
    },
    {
        number: 'RD-005',
        type: '旋翼',
        photo: 'RD-005.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-006',
        type: '旋翼',
        photo: 'RD-006.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-007',
        type: '旋翼',
        photo: 'RD-007.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-008',
        type: '旋翼',
        photo: 'RD-008.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-009',
        type: '旋翼',
        photo: 'RD-005.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-010',
        type: '旋翼',
        photo: 'RD-003.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
    {
        number: 'RD-011',
        type: '旋翼',
        photo: 'RD-006.png',
        address: 'B校区-D栋-103',
        time: '72:00',
        status: 0
    },
]
const disabled = ref(false)
const page = reactive({
    currentPage: 1,
    pageSize: 5,
    total: tableData.length
})

const tableTotal = () => {
    return input2.value != '' ? ftableData().length : tableData.length;
}
const ftableData = () => {
    return tableData.filter(
        (item, index) =>
            index < page.currentPage * page.pageSize &&
                index >= page.pageSize * (page.currentPage - 1) &&
                input2.value === '' ? 1 : (item.number == input2.value)
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

const host = window.location.host;
const getImageUrl = name => {
    return `http://${host}/src/assets/image/${name}`;
};
</script>
  
<style scoped>
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

.container {
    height: 100vh;

    .aside {
        height: 100vh;
    }

    .body {
        padding: 5px;
    }
}
</style>