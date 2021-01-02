<template>


    <formulario
            :clckAceptar="clckAceptar"
            :color="colorDefecto"
            :configuracion="fConfiguracion"
            :jsonPreguntas="fJsonPreguntas"
            :titulo="fTitulo"
            ref="form"
    ></formulario>

</template>

<script>

    import formulario from '@/components/Formulario/eFormulario.vue'
    import {preguntas} from '@/components/Formulario/preguntas'
    import mensajes from '@/components/SnackBar/mensajes.js'

    export default {
        props: {
            colorDefecto: String,
            ip: String
        },

        mixins:[mensajes],

        components: {
            formulario
        },

        data: () => ({
            fTitulo: "Nuevo Rol",
            fJsonPreguntas: [],
            fConfiguracion: {
                'rutaCancelar': 'roles',
            },

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
            inicializar(){
                this.fJsonPreguntas = this.getPreguntas();
                window.scrollTo(0, 0);

            },
            inicializar2(){

                this.inicializar();
                this.$refs.form.reset();
            },

            getPreguntas(){
                var preg = new preguntas();
                preg.preguntaSimple('nombre', 'Nombre del Rol', true);
                
                return preg.getJson();
            },

            /*
            |-------------------------
            | Click
            |-------------------------
            */
            clckAceptar() {

                var item = this.$refs.form.itemRetorno;
                if(this.validaciones(item))
                    return;


                let uri = this.ip + "rols/";

                this.axios
                    .post(uri, item)
                    .then(response => {
                        this.mensajeInfo("Nuevo rol registrado correctamente");
                        this.inicializar2();
                    })
                    .catch(error => {
                        console.log(error);
                        this.mensajeError("Ocurrió un error al registrar el rol");
                    });

            },

            /*
            |-------------------------
            | Select
            |-------------------------
            */
            validaciones(item){
                if(item.nombre==null||item.nombre==""){
                    this.mensajeAdvertencia("Tiene que colocar el nombre");
                    return true;
                }
                return false;
            }
        }
    }
</script>