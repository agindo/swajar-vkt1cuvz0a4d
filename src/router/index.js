import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import HomeMediaView from '../views/media/HomeView.vue'
import HomeSirelaView from '../views/sirela/HomeView.vue'
import HomeProfileView from '../views/profile/HomeView.vue'

import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/F6D2wQo5g6Ka/z1s6QUD8D2Cx/:id',
    name: 'HomeMediaView',
    component: HomeMediaView
  },
  {
    path: '/603m5d3M5kE6',
    name: 'HomeSirelaView',
    component: HomeSirelaView
  },
  {
    path: '/tP4KJ16Q8wm2',
    name: 'HomeProfileView',
    component: HomeProfileView
  },
  {
    path: '/PBcw3g0kC0xt',
    name: 'RegisterView',
    component: RegisterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
