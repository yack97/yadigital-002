import { createRouter, createWebHistory } from 'vue-router'

// Define las rutas de tu aplicación
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')

  },

  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/presupuesto',
    name: 'Presupuesto',
    component: () => import('../views/Presupuesto.vue')
  },
  {
    path: '/Articulo1',
    name: 'Articulo1',
    component: () => import('../views/Articulo1View.vue')
  },
  {
    path: '/Articulo2',
    name: 'Articulo2',
    component: () => import('../views/Articulo2View.vue')
  },
  {
    path: '/Articulo3',
    name: 'Articulo3',
    component: () => import('../views/Articulo3View.vue')
  },
  {
    path: '/Articulo4',
    name: 'Articulo4',
    component: () => import('../views/Articulo4View.vue')
  }
]

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
