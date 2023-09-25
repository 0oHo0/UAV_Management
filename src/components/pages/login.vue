<template>
    <div class="container">
        <el-text class="mx-1" type="primary" size="large">无人机管理系统</el-text>
        <div class="radius">
            <div class="login-container">
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
                    <el-form-item label="用户名" prop="username" class="user">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
import router from "@/router";
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    // 登录逻辑，可以发送请求到后端进行验证
                    console.log('登录成功');
                    // 登录成功后跳转到首页            
                    this.$router.push('/home');
                } else {
                    console.log('表单验证失败');
                }
            });
        }
    }
};
</script>
  
<style scoped>
.container {
    position: relative;
    align-items: center;
    height: 100vh;
    /* 设置容器高度为视口高度 */
    /* height: 227px;
    width: 400px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.mx-1 {
    position: absolute;
    /* 设置绝对定位 */
    top: 0;
    /* 将标题定位在容器顶部 */
    left: 50%;
    /* 将标题水平居中 */
    transform: translateX(-50%);
    /* 通过平移调整标题位置 */
    margin-top: 25vh;
    /* 去掉标题的默认上下边距 */
    font-size: 40px;
}
.radius {
    height: 300px;
    width: 400px;
    border: 2px solid var(--el-border-color);
    border-radius: 0;
    margin: auto;
    margin-top: 270px;
    box-shadow: var(--el-box-shadow-lighter);
}
.login-container {
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}</style>
  