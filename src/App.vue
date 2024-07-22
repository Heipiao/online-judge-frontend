<template>
  <div id="app">
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- Left side menu items -->
            <template v-slot:default>
              <div class="menu-left">
                <el-menu-item index="1" @click="goToHome">Home</el-menu-item>
                <el-menu-item index="2" @click="goToProblems">Problems</el-menu-item>
                <el-menu-item index="3" @click="goToProfile">Profile</el-menu-item>
              </div>
              <div class="menu-right">
                <el-menu-item index="4" @click="goToLogin">Login</el-menu-item>
                <el-menu-item index="5" @click="goToRegister">Register</el-menu-item>
              </div>
            </template>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
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
    goToLogin() {
      console.log('Navigating to Login');
      this.$router.push('/login');
      this.activeIndex = '4';
    },
    goToRegister() {
      console.log('Navigating to Register');
      this.$router.push('/register');
      this.activeIndex = '5';
    },
  },
};
</script>

<style>
.el-header {
  background-color: #fff;
}

.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
}

.menu-left {
  display: flex;
}

.menu-right {
  display: flex;
}

.el-menu-item {
  color: #fff;
}

.el-menu-item.is-active {
  background-color: #409eff;
  color: #fff;
}
</style>
