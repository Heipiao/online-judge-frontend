<!-- src/views/Problems.vue -->
<template>
  <el-container>
    <el-header>
      <h1>Problems</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-list>
            <el-list-item v-for="problem in problems" :key="problem.id">
              <el-card>
                <el-row>
                  <el-col :span="8">
                    <h3>
                      <router-link :to="'/problems/' + problem.id">{{ problem.title }}</router-link>
                    </h3>
                  </el-col>
                  <el-col :span="8">
                    <p>Type: <el-tag>{{ problem.type }}</el-tag></p>
                  </el-col>
                  <el-col :span="8" class="status-right">
                    <p>Status: <el-tag :type="problem.completed ? 'success' : 'info'">{{ problem.completed ? 'Completed' : 'Pending' }}</el-tag></p>
                  </el-col>
                </el-row>
              </el-card>
            </el-list-item>
          </el-list>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProblemList',
  data() {
    return {
      problems: []
    }
  },
  created() {
    console.log("Component created, about to fetch problems.")
    axios.get('http://localhost:5000/api/problems')
      .then(response => {
        console.log("Fetched problems:", response.data)
        this.problems = response.data
      })
      .catch(error => {
        console.error('Error fetching problems:', error)
      })
  }
}
</script>

<style>
.el-card {
  margin-bottom: 15px;
}
.status-right {
  text-align: right;
}
</style>
