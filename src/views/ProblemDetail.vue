<template>
  <el-container class="container">
    <el-header class="header">
      <h2 v-if="problem">{{ problem.title }}</h2>
      <h2 v-else>加载中...</h2>
    </el-header>
    <el-main class="main">
      <el-row :gutter="10" v-if="problem">
        <el-col :span="12">
          <el-card>
            <h3>题目描述</h3>
            <div v-html="problem.description"></div>

            <el-divider></el-divider>

            <h3>示例:</h3>
            <div v-for="example in problem.examples" :key="example.id">
              <p>输入：{{ example.input }}</p>
              <p>输出：{{ example.output }}</p>
              <p>解释：{{ example.explanation }}</p>
              <el-divider></el-divider>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <transition name="fade">
            <el-card v-if="!submissionResult">
              <h3>代码提交:</h3>
              <el-input
                type="textarea"
                v-model="code"
                rows="10"
                placeholder="在此处编写你的代码"
              ></el-input>
              <el-button
                type="primary"
                @click="submitCode"
                :disabled="loading"
              >
                提交
              </el-button>
            </el-card>
            <el-card v-else>
              <div v-if="submissionResult === 'success'" class="success-icon">
                <el-icon-check-circle></el-icon-check-circle>
                <p>提交成功！</p>
                <el-button type="primary" @click="handleNextQuestion">下一题</el-button>
              </div>
              <div v-else class="error-message">
                <el-icon-close-circle></el-icon-close-circle>
                <p>{{ errorMessage }}</p>
                <el-button type="primary" @click="handleRetry">返回编辑界面</el-button>
                <el-button @click="handleViewAnswer">查看答案</el-button>
              </div>
            </el-card>
          </transition>
        </el-col>
      </el-row>
      <el-row v-else>
        <el-col :span="24" style="text-align: center;">
          <el-spinner>加载中...</el-spinner>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import { ElContainer, ElHeader, ElMain, ElRow, ElCol, ElCard, ElDivider, ElInput, ElButton, ElIconCheckCircle, ElIconCloseCircle, ElSpinner } from 'element-plus'

export default {
  name: 'ProblemDetailPage',
  data() {
    return {
      problem: null,
      code: '',
      submissionResult: null, // 'success' or 'failure'
      errorMessage: '',
      loading: false,
    }
  },
  created() {
    const problemId = this.$route.params.id
    axios.get(`http://localhost:5000/api/problems/${problemId}`)
      .then(response => {
        this.problem = response.data
      })
      .catch(error => {
        console.error('Error fetching problem:', error)
      })
  },
  methods: {
    submitCode() {
      this.loading = true
      const problemId = this.$route.params.id
      axios.post('http://localhost:5000/api/submit', {
        code: this.code,
        problem_id: problemId
      })
      .then(() => {
        this.submissionResult = 'success'
        this.loading = false
      })
      .catch(error => {
        this.submissionResult = 'failure'
        this.errorMessage = error.response.data.message || '提交失败，请重试。'
        this.loading = false
      })
    },
    handleNextQuestion() {
      // 跳转到下一题
      const nextProblemId = this.problem.nextProblemId // 假设返回数据中包含下一题的ID
      this.$router.push(`/problems/${nextProblemId}`)
    },
    handleRetry() {
      // 返回编辑界面
      this.submissionResult = null
      this.code = ''
    },
    handleViewAnswer() {
      // 显示答案逻辑，可以是一个弹窗或者跳转到答案页面
    }
  },
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol,
    ElCard,
    ElDivider,
    ElInput,
    ElButton,
    ElIconCheckCircle,
    ElIconCloseCircle,
    ElSpinner
  }
}
</script>

<style scoped>
.el-header {
 
  padding: 0px;
  text-align: center;
}

.el-main {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.el-button {
  margin-top: 20px;
}

.el-divider {
  margin: 20px 0;
}

.success-icon {
  color: green;
  font-size: 24px;
  text-align: center;
}

.error-message {
  color: red;
  text-align: center;
}

.error-message p {
  margin: 0;
  padding-top: 10px;
}

/* 添加动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
