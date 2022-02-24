import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import ContactPage from '../components/ContactPage.vue'
import ProductPage from '../components/ProductPage.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const myrouter = createRouter({
  history: createWebHistory(),
  routes
})

export default myrouter
