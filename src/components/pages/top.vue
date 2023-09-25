<template>
  <div class="flex">
    <div class="left">
      <img src="@/assets/administrator.png" alt="Logo" class="image">
      <!-- <el-avatar :size="48" class="mr-3" src="@/assets/UAV.png"/> -->
      <!-- <el-avatar :size="48" class="mr-3" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/> -->
      <span class="text-mr-3">管理员&#160;</span>
      <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
      </span>
      <el-tag>Default</el-tag>
    </div>
    <div class="right">
      <el-button type="primary" class="ml-2">登出</el-button>
    </div>
  </div>
  <el-divider border-style="double" class="divide" />
</template>

  
<script lang="ts" setup>

</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    .image {
      width: 40px;
      height: auto;
      margin-right: 5px;
    }
  
    .text-mr-3 {
      font-size: 15px;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
}

.divide {
  margin: -4px;
}
</style>
  