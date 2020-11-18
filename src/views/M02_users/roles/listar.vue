<template>


    <tabla
            :clckEditar="clckEditar"
            :clckEliminar="clckEliminar"
            :color="colorDefecto"
            :encabezado="fEncabezado"
            :items="fItems"
            :titulo="fTitulo"
            :clckNuevo="clckNuevo"
            :buscar="buscar"
    ></tabla>


</template>

<script>

    import toolbar from '@/components/ToolBar/eToolvar.vue'
    import {submodulo} from '@/components/ToolBar/submodulo'

    import tabla from '@/components/Tabla/eTabla.vue'
    import mensajes from '@/components/SnackBar/mensajes.js'
    import {encabezado} from '@/components/Tabla/encabezado.js'

    export default {
        props: {
            colorDefecto: String,
            buscar: String, 
            ip: String
        },

        mixins: [mensajes],

        components: {
            tabla
        },

        data: () => ({

            fItems: [],
            fTitulo: "Utensilios",
            fEncabezado: []

        }),
        destroyed() {
            document.removeEventListener("keyup", this.atajos);
        },
        mounted() {
            document.addEventListener("keyup", this.atajos);
        },

        created() {
            this.inicializar();
        },

        methods: {

            atajos() {

                if (event.ctrlKey && event.code == "KeyN") {
                    this.clckNuevo();
                }
            },
            /*
            |-------------------------
            | Inicio
            |-------------------------
            */
            inicializar() {
                this.fEncabezado = this.getEncabezado();
                this.iniItems();
                window.scrollTo(0, 0);
            },


            getEncabezado() {
                var encabezados = new encabezado();


                encabezados.tituloSimple("Id", "idUtensilio")
                encabezados.tituloSimple("Nombre", "nombre")
                encabezados.tituloAccion();

                return encabezados.getJsonEncabezado();
            },

            iniItems() {

                let uri = this.ip + "rols/";
                this.axios
                    .get(uri)
                    .then(response => {
                        this.fItems = response.data;

                    })
                    .catch(error => {
                        this.$log.info(error);
                        this.mensajeError("Ocurrió un error");
                    });
            },

            /*
            |-------------------------
            | Click
            |-------------------------
            */

            clckEditar(item) {

                this.$router.push({
                    name: "roles_editar",
                    params: {
                        id: item.idRol
                    }
                });
            },

            clckEliminar(itemEliminar) {

                let uri = this.ip + "rols/" + itemEliminar.idRol  + "/";
                
                this.axios
                    .delete(uri)
                    .then(response => {
                        this.mensajeInfo("Eliminado exitosamente");
                        var index = this.fItems.indexOf(itemEliminar);
                        if (index > -1) {
                            this.fItems.splice(index, 1);
                        }
                    })
                    .catch(error => {
                        this.mensajeError("Ocurrió un error");
                    });
            },
            clckNuevo() {
                this.$router.push({name: "roles_nuevo"});
            }

        }
    }
</script>