import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/M01_login/Home.vue'
import About from '@/views/M01_login/About.vue'
import Login from '@/components/M01_login/login/login.vue'
import Recovery from '@/components/M01_login/recoveryPassword/recovery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/recovery',
    name: 'Recovery',
    component: Recovery
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
