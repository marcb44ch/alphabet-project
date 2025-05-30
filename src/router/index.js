import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarbonFootprint from '@/views/CarbonFootprint.vue'
import ClimaticChange from '@/views/ClimaticChange.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/CarbonFootprint',
      name: 'CarbonFootprint',
      component: CarbonFootprint,
    },
    {
      path: '/ClimaticChange',
      name: 'ClimaticChange',
      component: ClimaticChange,
    },
    {
      path: '/asg',
      name: 'asg',
      component: () => import('../views/ASG.vue')
    },
  ],
})

export default router
