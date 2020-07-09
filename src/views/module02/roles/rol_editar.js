import eSnack from '../../modules/SnackBar/eSnack.vue';
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
            this.focoInicio();
            this.cargarDatos();
        },
        focoInicio() {
            setTimeout(() => {
                this.$nextTick(this.$refs.focoNuevo.focus);
            }, 500);
        },

        cargarDatos() {

            let uri = this.ip + `Permiso_getItemId/${this.$route.params.id}`;
            this.axios
                .get(uri)
                .then(response => {
                    this.recorrerDatos(response.data);
                })
                .catch(function () {
                    this.$emit("mensajeError", "Error al cargar los datos, verifique su conexión, o vuelva a iniciar sesión.");
                });
        },

        recorrerDatos(data) {
            this.item.nombre = data.nombreRol;

            for (var key in this.item.modulos) {
                var modulo = this.item.modulos[key];

                for (var key2 in this.item.modulos[key].subModulos) {
                    var submodulo = modulo.subModulos[key2];

                    for (var key3 in submodulo.permisos) {
                        var valor = data.modulos[modulo.nombre][submodulo.nombre][key3];
                        submodulo.permisos[key3].valor = valor;
                    }
                }
            }
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

            if (this.nombre == "") {
                this.focoInicio();
                this.$emit("mensajeAdvertencia", "Tiene que colocarle nombre al rol.");
                return;
            }


            let uri = this.ip + `Permiso_update/${this.$route.params.id}`;
            this.axios
                .post(uri, this.item)
                .then(response => {

                    this.clckCancelar();
                    this.$emit("mensajeInfo", "Rol modificado exitosamente");
                })
                .catch(error => {

                    this.$emit("mensajeError", "Ocurrió un error al modificar el rol, verifique su conexión.");

                });
        }
    }
};

