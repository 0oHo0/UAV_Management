<template>
  <div class="aside">
    <div class="title">
      <img src="@/assets/image/logo.png" alt="Logo" class="image">
      <el-text size="large" type="primary" tag="sub">无人机管理系统</el-text>
    </div>
    <el-menu router
       :collapse='false' default-active="/home" class="el-menu-vertical-demo" active-text-color="#409EFF" background-color=#ffffff
      text-color="#000" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/home">
        <el-icon>
          <House />
        </el-icon>
        <span>库存管理</span>
      </el-menu-item>
      <el-menu-item index="/time">
        <el-icon>
          <Clock />
        </el-icon>
        <span>租赁时间管理</span>
      </el-menu-item>
      <el-menu-item index="/people">
        <el-icon>
          <User />
        </el-icon>
        <span>租赁人员管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
  
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style scoped lang="scss">
.aside {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      margin-right: 5px;
      margin-top: 5px;
      width: 25%;
      /* 设置图片的宽度 */
      height: auto;
      max-width: 100%;
      /* 设置图片的最大宽度 */
    }
  }
}
</style>
  