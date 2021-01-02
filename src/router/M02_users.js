import Vue from 'vue'
import VueRouter from 'vue-router'


// ip 
import getIp from '@/components/globales.js';


//views
import home from '@/views/M02_users/home.vue'
import roles from '@/views/M02_users/roles/listar.vue'
import roles_nuevo from '@/views/M02_users/roles/nuevo.vue'
import roles_editar from '@/views/M02_users/roles/editar.vue'

// Lugar
import lugares from '@/views/M02_users/lugares/listar.vue'
import lugares_nuevo from '@/views/M02_users/lugares/nuevo.vue'
import lugares_editar from '@/views/M02_users/lugares/editar.vue'

Vue.use(VueRouter)


const routes = [{
    name: 'index',
    path: '/',
    component: home,
        children: [{
                name: 'roles',
                path: 'roles',
                props: {ip: getIp()},
                component: roles
            },
            {
                name: 'roles_editar',
                path: 'roles_editar:id',
                props: {ip: getIp()},
                component: roles_editar
            },
            {
                name: 'roles_nuevo',
                path: 'roles_nuevo',
                props: {ip: getIp()},
                component: roles_nuevo
            },{
                name: 'lugares',
                path: 'lugares',
                props: {ip: getIp()},
                component: lugares
            },
            {
                name: 'lugares_editar',
                path: 'lugares_editar:id',
                props: {ip: getIp()},
                component: lugares_editar
            },
            {
                name: 'lugares_nuevo',
                path: 'lugares_nuevo',
                props: {ip: getIp()},
                component: lugares_nuevo
            },
        ]
}];


const router = new VueRouter({
  routes
})

export default router
