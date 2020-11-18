import eSnack from '@/components/SnackBar/eSnack.vue';
import getDefaultData from './rol_nuevoD';

export default {
    props: ['ip', 'buscarGlobal', 'colorDefecto'],
    components: {
        eSnack,
    },

    data: getDefaultData,
    created() {
        this.inicializar();
    },

    methods: {
        /*
        |--------------------------------------------------------------------------
        | Botones
        |--------------------------------------------------------------------------
        */
        inicializar() {
            Object.assign(this.$data, getDefaultData());
            this.focoInicio();

            window.scrollTo(0, 0);
        },
        focoInicio() {
            setTimeout(() => {
                this.$nextTick(this.$refs.focoNuevo.focus);
            }, 500);
        },

        /*
        |--------------------------------------------------------------------------
        | Botones
        |--------------------------------------------------------------------------
        */
        clckCancelar() {
            this.$router.push({
                name: "roles"
            });
        },
        clckAceptar() {


            let uri = this.ip + "rols/";
            

            this.axios
                .post(uri, this.item)
                .then(response => {

                    this.$emit("mensajeInfo", "Nuevo rol crado exitosamente");
                    this.inicializar();
                })
                .catch(error => {
                    this.$emit("mensajeError", "Error al insertar");
                });
        }
    }
};


