import Vue from 'vue'
import VueRouter from 'vue-router'

//views

//import master from '@/views/module02/peoples_master.vue'
import home from '@/views/module02/peoples_home.vue'


import roles from '@/views/module02/roles/rol_display.vue'
//import roles_editar from './peoples/roles/rol_editar.vue'
import roles_nuevo from '@/views/module02/roles/rol_nuevo.vue'


import personas from '@/views/module02/personas/personas_display.vue'
//import personas from './peoples/personas/personas_display.vue'
//import personas_editar from './peoples/personas/personas_editar.vue'
import personas_nuevo from '@/views/module02/personas/personas_nuevo.vue'


import usuarios from '@/views/module02/usuarios/usuario_display.vue'
//import usuarios_editar from '@/views/module02/usuarios/usuario_editar.vue'
import usuarios_nuevo from '@/views/module02/usuarios/usuario_nuevo.vue'




Vue.use(VueRouter)



const routes = [{
    name: 'index',
    path: '/',
    component: home,
        children: [{
                name: 'roles',
                path: 'roles',
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
