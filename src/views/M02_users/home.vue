<template>


    <toolbar
            :colorBarra="fColorBarra"
            :subModulos="fSubmodulos"
            :atajos1="fAtajos"
            :chip="fChip"
    >

    </toolbar>

</template>

<script>

    import toolbar from '@/components/ToolBar/eToolvar.vue'
    import {submodulo} from '@/components/ToolBar/submodulo'

    export default {



        components: {
            toolbar
        },

        data: () => ({

            fColorBarra:"indigo darken-3",
            fSubmodulos:[],
            fAtajos:[],
            fChip:{
                nombre:"Administración de usuarios",
                icono:"supervisor_account"
            }


        }),

        created() {

            this.inicializar();
        },

        methods: {

            /*
            |-------------------------
            | Inicio
            |-------------------------
            */
            inicializar() {
                this.getEncabezado();
                window.scrollTo(0, 0);
            },


            /*
            |-------------------------
            | Encabezado
            |-------------------------
            */
            getEncabezado() {
                var submodulos = new submodulo(this.$router);

                submodulos.tituloSimple("Roles","/roles", "KeyO", "CTRL + ALT + R")
                submodulos.tituloSimple("Ubicaciones","/lugares", "KeyO", "CTRL + ALT + L")

                this.fAtajos=submodulos.getAtajos();
                this.fSubmodulos=submodulos.getJson();

            },


        }
    }
</script>