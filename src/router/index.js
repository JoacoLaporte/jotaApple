import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import Nosotros from '../components/Nosotros.vue'
import Contactanos from '../components/Contactanos.vue'
import BusquedaView from '../views/BusquedaView.vue'
import FinalizarCompraView from '../views/FinalizarCompraView.vue'
import Carrito from '../components/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/productos/:categoria',
    name: 'ProductsView',
    component: ProductsView,
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: Nosotros,
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: Contactanos,
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: BusquedaView,
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito,
  },
  {
    path: '/finalizarCompra',
    name: 'finalizarCompra',
    component: FinalizarCompraView,
  }
]

const router = createRouter({
  history: createWebHistory('/jotaApple/'),
  routes
})

export default router
