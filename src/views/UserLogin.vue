<template>
    <div class="login-container">
      <el-form :model="loginForm" ref="loginForm" label-width="120px">
        <el-form-item label="Email" prop="email">
          <el-input v-model="loginForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserLogin', // Changed component name
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      login() {
        axios.post('/api/login', this.loginForm)
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token);
            this.$router.push('/profile');
          })
          .catch(error => {
            console.error('Login error:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  .login-container {
    width: 300px;
    margin: 0 auto;
    padding-top: 50px;
  }
  </style>
  