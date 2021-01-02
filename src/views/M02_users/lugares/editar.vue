<template>


    <v-progress-linear
            :indeterminate="true"
            v-if="cargando"
    ></v-progress-linear>

    <formulario
            :clckAceptar="clckAceptar"
            :color="colorDefecto"
            :configuracion="fConfiguracion"
            :jsonPreguntas="fJsonPreguntas"
            :titulo="fTitulo"
            ref="form"
            v-else
    ></formulario>

</template>

<script>

    import nuevo from './nuevo.vue'

    export default {
        mixins: [nuevo],

        data: () => ({
            fTitulo: "Editar Rol",
            cargando: true,
            tempData: {}
        }),

        created() {
            this.inicializar();
        },
        updated() {

            if (!this.cargando) {
                this.$refs.form.itemRetorno = this.tempData;
            }
        },
        methods: {
            /*
            |-------------------------
            | Inicio
            |-------------------------
            */
            inicializar() {
                window.scrollTo(0, 0);
                this.fJsonPreguntas = this.getPreguntas();
                
                let uri = this.ip + "rols/" + this.$route.params.id +"/";

                this.axios
                    .get(uri)
                    .then(response => {
                        this.tempData = response.data;
                        this.cargando = false;
                    })
                    .catch(error => {
                        console.log(error);
                        this.mensajeError("Ocurrió un error al obtener el item a editar");
                    });
            },

            /*
            |-------------------------
            | Click
            |-------------------------
            */
            clckAceptar() {

                var item = this.$refs.form.itemRetorno;
                if (this.validaciones(item))
                    return;


                let uri = this.ip + "rols/" + this.$route.params.id +"/";
                this.axios
                    .put(uri,item)
                    .then(response => {
                        this.mensajeInfo("Rol modificado correctamente");
                        this.$refs.form.clckCancelar();
                    })
                    .catch(error => {
                        console.log(error);
                        this.mensajeError("Ocurrió un error al modificar el rol");
                    });

            },

        }
    }
</script>
