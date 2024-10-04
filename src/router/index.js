import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/home/MainView.vue'
import LandingView from '@/views/home/landing/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '/',
          name: 'landing',
          component: LandingView
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/creations',
      name: 'creations'
    }
  ]
})

export default router
