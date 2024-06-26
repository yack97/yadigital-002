import { createRouter, createWebHistory } from 'vue-router'
import DetalleArticulo from '../views/DetalleArticulo.vue';


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
  path: '/login',
  name: 'login',
  component: () => import('../views/LoginView.vue')
  },
  {
  path: '/admin',
  name: 'AdminView',
  component: () => import('../views/AdminView.vue')
  },
  {
    path: '/presupuesto',
    name: 'Presupuesto',
    component: () => import('../views/Presupuesto.vue')
  },
  {
    path: '/articulo/:id',
    name: 'DetalleArticulo',
    component: DetalleArticulo,
    props: true // Habilitar paso de props a través de la ruta
  }
]

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
