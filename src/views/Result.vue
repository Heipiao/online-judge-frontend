<template>
  <div>
    <h1>Result</h1>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ResultPage',
  data() {
    return {
      result: ''
    }
  },
  created() {
    const submissionId = this.$route.params.id
    console.log("Component created, about to fetch result for submission:", submissionId)
    axios.get(`/api/result/${submissionId}`)
      .then(response => {
        console.log("Fetched result:", response.data)
        this.result = response.data.result
      })
      .catch(error => {
        console.error('Error fetching result:', error)
      })
  }
}
</script>
