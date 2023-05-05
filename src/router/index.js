import LandingView from '@/views/LandingView.vue'
import MainLayout from '@/views/Layouts/MainLayout.vue'
import QuestionsLayout from '@/views/Layouts/QuestionsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'landing',
          component: LandingView
        },
        {
          path: '/questions',
          name: 'questions',
          component: QuestionsLayout,
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
