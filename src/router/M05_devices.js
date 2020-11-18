import Vue from 'vue'
import VueRouter from 'vue-router'

//views


Vue.use(VueRouter)


import home from '@/views/M05_devices/home.vue'

import categoria from '@/views/M05_devices/categoria/categoria.vue'
import categoria_nuevo from '@/views/M05_devices/categoria/nuevo.vue'
import categoria_display from '@/views/M05_devices/categoria/display.vue'
import categoria_editar from '@/views/M05_devices/categoria/editar.vue'


import articulo from '@/views/M05_devices/dispositivo/articulo.vue'
import articulo_editar from '@/views/M05_devices/dispositivo/editar.vue'
import articulo_nuevo from '@/views/M05_devices/dispositivo/nuevo.vue'


const routes = [{
    name: 'index',
    path: '/',
    component: home,
    children: [{
        name: 'categoria',
        path: 'categoria',
        component: categoria,
        children: [{
            name: 'categoria_nuevo',
            path: 'categoria_nuevo',
            component: categoria_nuevo,
        },
        {
            name: 'categoria_display',
            path: 'categoria_display',
            component: categoria_display
        },
        {
            name: 'categoria_editar',
            path: 'categoria_editar:id',
            component: categoria_editar
        }
        ]
    },
    {
        name: 'articulo',
        path: 'articulo',
        component: articulo,
    },
    {
        name: 'articulo_nuevo',
        path: 'articulo_nuevo',
        component: articulo_nuevo,
    },
    {
        name: 'articulo_editar',
        path: 'articulo_editar:id',
        component: articulo_editar,
    },
    ]
}];


const router = new VueRouter({
    routes
})

export default router
