<template>
  <div id="app">
    <el-header>
      <el-row>
        <el-col :span="20">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="goToHome">Home</el-menu-item>
            <el-menu-item index="2" @click="goToProblems">Problems</el-menu-item>
            <el-menu-item index="3" @click="goToProfile">Profile</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4" class="align-right">
          <el-button type="primary" size="large" @click="showLogin" class="nav-button">登录</el-button>
          <el-button type="success" size="large" @click="showRegister" class="nav-button">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <router-view />

    <!-- 登录对话框 -->
    <el-dialog v-model:visible="loginDialogVisible" title="登录" :center="true">
      <login-form @login-success="handleLoginSuccess" />
    </el-dialog>

    <!-- 注册对话框 -->
    <el-dialog v-model:visible="registerDialogVisible" title="注册" :center="true">
      <register-form @register-success="handleRegisterSuccess" />
    </el-dialog>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      activeIndex: '1',
      loginDialogVisible: false,
      registerDialogVisible: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('Menu item selected:', key, keyPath);
    },
    goToHome() {
      console.log('Navigating to Home');
      this.$router.push('/');
      this.activeIndex = '1';
    },
    goToProblems() {
      console.log('Navigating to Problems');
      this.$router.push('/problems');
      this.activeIndex = '2';
    },
    goToProfile() {
      console.log('Navigating to Profile');
      this.$router.push('/profile');
      this.activeIndex = '3';
    },
    showLogin() {
      console.log('Show login dialog');
      this.loginDialogVisible = true;
    },
    showRegister() {
      console.log('Show register dialog');
      this.registerDialogVisible = true;
    },
    handleLoginSuccess() {
      console.log('Login successful, hiding login dialog');
      this.loginDialogVisible = false;
    },
    handleRegisterSuccess() {
      console.log('Register successful, hiding register dialog');
      this.registerDialogVisible = false;
    },
  },
};
</script>

<style>
.el-menu-demo {
  background-color: #545c64;
  color: #fff;
}
.el-menu-demo .el-menu-item {
  color: #fff;
}
.el-menu-demo .el-menu-item.is-active {
  background-color: #409eff;
  color: #fff;
}
.align-right {
  text-align: right;
}
.nav-button {
  margin-left: 10px;
}
</style>
