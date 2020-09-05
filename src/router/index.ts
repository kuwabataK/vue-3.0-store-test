import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TestPage from '@/views/page/TestPage.vue'
import TestPage2 from '@/views/page/TestPage2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: TestPage,
  },
  {
    path: '/test2',
    name: 'AuthenticateUserPage',
    component: TestPage2,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
