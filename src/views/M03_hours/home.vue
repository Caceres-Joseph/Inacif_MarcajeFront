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

    import toolbar from "@/components/ToolBar/eToolvar.vue";
    import {submodulo} from "@/components/ToolBar/submodulo";

    export default {


        components: {
            toolbar
        },

        data: () => ({

            fColorBarra:"cyan darken-4",
            fSubmodulos:[],
            fAtajos:[],
            fChip:{
                nombre:"Horas",
                icono:"schedule"
            }


        }),

        created() {

            //this.inicializar();
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

                submodulos.tituloSimple("Planilla","/planilla/articulo", "KeyO", "CTRL + ALT + O")

                this.fAtajos=submodulos.getAtajos();
                this.fSubmodulos=submodulos.getJson();
            },
        }
    }
</script>