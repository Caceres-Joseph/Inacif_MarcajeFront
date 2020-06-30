import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/module01/Home.vue'
import About from '@/views/module01/About.vue'
import Login from '@/components/module01/login/login.vue'
import Recovery from '@/components/module01/recoveryPassword/recovery.vue'

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
