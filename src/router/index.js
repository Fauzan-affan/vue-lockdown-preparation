import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top Up',
    component: () => import('../views/TopUpMoney.vue')
  },
  {
    path: '/prepare-food',
    name: 'Prepare Food',
    component: () => import('../views/PrepareFood.vue')
  },
  {
    path: '/prepare-essentials',
    name: 'Prepare Essentials',
    props: true,
    component: () => import('../views/PrepareEssentials.vue')
  },
  {
    path: '/mask-and-sanitizer',
    name: 'Mask and Sanitizer',
    props: true,
    component: () => import('../views/MaskAndSanitizer.vue')
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    props: true,
    component: () => import('../views/Entertainment.vue')
  },
  {
    path: '/total',
    name: 'Total',
    props: true,
    component: () => import('../views/Total.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
