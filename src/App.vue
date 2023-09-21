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
          <router-view></router-view>
        </div>  
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">

.container{
  height: 100vh;
  .aside{
    height: 100vh;
  }
  .body{
    padding: 5px;
  }
}
</style>
