import { createRouter, createWebHistory } from 'vue-router'
import ApplicationListView from '@/views/ApplicationListView.vue'
import NewApplicationView  from '@/views/NewApplicationView.vue'

const routes = [
  {
    path: '/',
    name: 'ApplicationList',
    component: ApplicationListView
  },
  {
    path: '/new',
    name: 'NewApplication',
    component: NewApplicationView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
