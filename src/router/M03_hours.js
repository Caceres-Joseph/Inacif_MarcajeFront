import Vue from 'vue'
import VueRouter from 'vue-router'

//views
 

Vue.use(VueRouter)


import home from '@/views/M03_hours/home.vue'

const routes = [{
    name: 'index',
    path: '/',
    component: home,
}];


const router = new VueRouter({
  routes
})

export default router
