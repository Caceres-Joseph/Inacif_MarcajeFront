import Vue from 'vue'
import VueRouter from 'vue-router'

//views

import home from '@/views/M02_users/peoples_home.vue'


import roles from '@/views/M02_users/roles/rol_display.vue'
import roles_nuevo from '@/views/M02_users/roles/rol_nuevo.vue'


import personas from '@/views/M02_users/personas/personas_display.vue'
import personas_nuevo from '@/views/M02_users/personas/personas_nuevo.vue'


import usuarios from '@/views/M02_users/usuarios/usuario_display.vue'
import usuarios_nuevo from '@/views/M02_users/usuarios/usuario_nuevo.vue'

// ip 
import getIp from '@/components/globales.js';

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
            /*
            {
                name: 'roles_editar',
                path: 'roles_editar:id',
                component: roles_editar
            },
            */
            {
                name: 'roles_nuevo',
                path: 'roles_nuevo',
                props: {ip: getIp()},
                component: roles_nuevo
            },
            {
                name: 'personas',
                path: 'personas',
                component: personas
            },
            /*
            {
                name: 'personas_editar',
                path: 'personas_editar:id',
                component: personas_editar
            },
            */
            {
                name: 'personas_nuevo',
                path: 'personas_nuevo',
                component: personas_nuevo
            },
            {
                name: 'usuarios',
                path: 'usuarios',
                component: usuarios
            },
            /*
            {
                name: 'usuarios_editar',
                path: 'usuarios_editar:id',
                component: usuarios_editar
            },
            */
            {
                name: 'usuarios_nuevo',
                path: 'usuarios_nuevo',
                component: usuarios_nuevo
            }
        ]
}];


const router = new VueRouter({
  routes
})

export default router
