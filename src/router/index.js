import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/RandomUser',
      name: 'RandomUser',
      component: () => import('../views/RandomUserView.vue')
    },
    {
      path: '/PokeApi',
      name: 'PokeApi',
      component: () => import('../views/PokeApiView.vue')
    },
    {
      path: '/DolarFecha',
      name: 'DolarFecha',
      component: () => import('../views/DolarFechaView.vue')
    },
    {
      path: '/Clima',
      name: 'Clima',
      component: () => import('../views/ClimaView.vue')
    }
  ]
})

export default router
