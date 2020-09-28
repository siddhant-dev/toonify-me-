import Vue from 'vue'
import VueRouter from 'vue-router'
import Faq from '../components/Faq.vue'
import Example from '../components/Examples.vue'
import About from '../components/About.vue'
import Toon from '../components/Toon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'Home',
    component: Toon
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior ( to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
  }
})

export default router
