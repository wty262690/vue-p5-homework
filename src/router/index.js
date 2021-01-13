import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'example1',
    component: () => import('../views/example1.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
