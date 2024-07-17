import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/Home.vue'
import ProblemList from './views/Problems.vue'
import ProblemDetailPage from './views/ProblemDetail.vue'
import SubmitForm from './views/Submit.vue'
import ResultPage from './views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/problems',
    name: 'problems',
    component: ProblemList
  },
  {
    path: '/problems/:id',
    name: 'problem-detail',
    component: ProblemDetailPage
  },
  {
    path: '/submit',
    name: 'submit',
    component: SubmitForm
  },
  {
    path: '/result/:id',
    name: 'result',
    component: ResultPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
