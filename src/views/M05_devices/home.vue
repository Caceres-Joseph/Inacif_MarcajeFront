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

            fColorBarra:"blue darken-4",
            fSubmodulos:[],
            fAtajos:[],
            fChip:{
                nombre:"Dispositivos",
                icono:"fingerprint"
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


                submodulos.tituloSimple("Categorías","/categoria/categoria_display", "KeyC", "CTRL + ALT + C")
                submodulos.tituloSimple("Biométricos","/articulo", "KeyA","CTRL + ALT + A")
                //submodulos.tituloSimple("Configuracion","/peoples/configuracion/", "KeyC","CTRL + ALT + C")

                this.fAtajos=submodulos.getAtajos();
                this.fSubmodulos=submodulos.getJson();
            },
        }
    }
</script>