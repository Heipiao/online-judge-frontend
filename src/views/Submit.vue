<template>
  <div>
    <h1>Submit Code</h1>
    <textarea v-model="code"></textarea>
    <button @click="submitCode">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SubmitForm',
  data() {
    return {
      code: ''
    }
  },
  methods: {
    submitCode() {
      const problemId = this.$route.params.id
      console.log("About to submit code for problem:", problemId)
      axios.post('http://localhost:5000/api/submit', {
        code: this.code,
        problem_id: problemId
      })
      .then(response => {
        console.log("Code submitted, response:", response.data)
        this.$router.push('/result/' + response.data.submission_id)
      })
      .catch(error => {
        console.error('Error submitting code:', error)
      })
    }
  }
}
</script>
