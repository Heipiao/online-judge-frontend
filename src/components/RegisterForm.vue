<template>
    <el-form ref="registerForm" :model="registerForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RegisterForm',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      async onSubmit() {
        console.log('Submitting register form:', this.registerForm);
        try {
          const response = await axios.post('/api/register', this.registerForm);
          this.$emit('register-success');
          console.log('注册成功:', response.data);
        } catch (error) {
          console.error('注册失败:', error.response.data);
        }
      },
    },
  };
  </script>
  