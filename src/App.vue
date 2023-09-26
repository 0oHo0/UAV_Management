<template>
  <div class="container">
    <el-container>
      <el-aside width="200px" class="aside" v-if="isLoggedIn">
        <asid />
      </el-aside>
      <el-container>
        <el-header v-if="isLoggedIn">
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

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.body.style.overflow = ''; // 在组件销毁前恢复滚动条
  }
}
</script>

<style scoped lang="css">
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
