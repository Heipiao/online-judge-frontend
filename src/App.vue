<template>
  <div id="app">
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="goToHome">Home</el-menu-item>
            <el-menu-item index="2" @click="goToProblems">Problems</el-menu-item>
            <el-menu-item index="3" @click="goToProfile">Profile</el-menu-item>
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
