import getDefaultData from './personas_nuevoD.js';

export default {
    props: ['ip', 'buscarGlobal', 'colorDefecto'],


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
            let uri2 = this.ip + "Rol_items1";
            this.axios.get(uri2).then(response => {
                this.roles = response.data;
            });
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
                name: "personas"
            });
        },
        clckAceptar() {
            let uri = this.ip + "Persona_insert";
            if (this.item.nombre == "" || this.item.idRol==null) {
                this.focoInicio();
                this.$emit("mensajeAdvertencia", "Tiene que colocarle nombre y/o indicar el rol");
                return;
            }

            this.axios
                .post(uri, this.item)
                .then(response => {
                    this.personas=[];

                    this.$emit("mensajeInfo", "Nueva persona registrada exitosamente");
                    this.inicializar();
                })
                .catch(error => {
                    this.$emit("mensajeError", "Error al insertar");
                });
        },

        /*
        |--------------------------------------------------------------------------
        | ComboBox
        |--------------------------------------------------------------------------
        */

        cbCambioNuevoRol(item2) {

            if (item2.idRol == parseInt(item2.idRol, 10)) {
                this.item.idRol = item2.idRol;
            }
        },
    }
};


