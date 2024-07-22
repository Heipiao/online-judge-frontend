<template>
  <div class="register-container">
    <el-form :model="registerForm" ref="registerForm" label-width="120px">
      <el-form-item label="Username" prop="username">
        <el-input v-model="registerForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="registerForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserRegister', // Changed component name
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      axios.post('/api/register', this.registerForm)
        .then(() => {
          this.$router.push('/login');
        })
        .catch(error => {
          console.error('Register error:', error);
        });
    },
  },
};
</script>

<style>
.register-container {
  width: 300px;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
