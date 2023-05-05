import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/questions',
          name: 'questions',
          component: () => import('../views/QuestionsView.vue'),
          redirect: '/questions/budget',
          children: [
            {
              path: 'budget',
              name: 'budget',
              component: () => import('../views/Questions/BudgetView.vue')
            },
            {
              path: 'size',
              name: 'size',
              component: () => import('../views/Questions/SizeView.vue')
            },
            {
              path: 'category',
              name: 'category',
              component: () => import('../views/Questions/CategoryView.vue')
            },
            {
              path: 'location',
              name: 'location',
              component: () => import('../views/Questions/LocationView.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
