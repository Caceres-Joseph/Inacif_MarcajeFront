import eSnack from '@/components/SnackBar/eSnack.vue';
import getDefaultData from './rol_displayD';

export default {
    props: ['ip', 'buscarGlobal', 'colorDefecto', 'itemsDisplayRols'],
    components: {
        eSnack,
    },
    data: getDefaultData,
    destroyed() {
        //document.removeEventListener("keyup", this.atajos);
    },
    mounted() {
        //document.addEventListener("keyup", thitemsis.atajos);
    },
    created() {

        this.inicializar();
        //this.enviarTab();
    },
    methods: {
        atajos(event) {
            if (event.ctrlKey && event.code == "KeyN") {
                this.clckNuevo();
            }

        },
        /*
        |--------------------------------------------------------------------------
        | Inicio
        |--------------------------------------------------------------------------
        */
        inicializar() {

            let uri = this.ip + "rols/";
            this.items = this.itemsDisplayRols;
            console.log(uri);

            this.axios.get(uri).then(response => {

                if (this.itemsDisplayRols == 0 || JSON.stringify(response.data) != JSON.stringify(this.items)) {
                    this.items = response.data;
                    //this.$emit("accDisplayRols", this.items);
                }
            });

        },

        /*
        |--------------------------------------------------------------------------
        | Botones
        |--------------------------------------------------------------------------
        */
        clckNuevo() { 

            this.$router.push({
                name: "roles_nuevo"
            });

        },
        clckEditar(item) {

            if(!this.itemsPermisos.roles.valor.editar)
                return;

            this.$router.push({
                name: "roles_editar",
                params: {
                    id: item.idRol
                }
            });
        },
        clckEliminar(item) {

            if(!this.itemsPermisos.roles.valor.eliminar)
                return;

            this.itemEliminar = item;
            this.dlgEliminar = true;
        },

        /*
        |--------------------------------------------------------------------------
        | Dialogo
        |--------------------------------------------------------------------------
        */
        btnEliminar() {

            let uri = this.ip + `Rol_delete/${
                this.itemEliminar.idRol
                }`;

            this.axios
                .get(uri)
                .then(response => {
                    var index = this.items.indexOf(this.itemEliminar);
                    if (index > -1) {
                        this.items.splice(index, 1);
                    }

                    this.$emit("mensajeInfo", "Rol eliminado exitosamente");
                })
                .catch(error => {
                    this.$emit("mensajeError", "Ocurrió un error al eliminar el rol, verifique su conexión.");
                });

            this.idEliminar = 0;
            this.dlgEliminar = false;
        },
        enviarTab() {
            this.$emit("accTabs", "0");
            window.scrollTo(0, 0);
        }
    }
};