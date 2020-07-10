import getDefaultData from "../usuarios/usuario_displayD.js";


export default {
    props: ['ip', 'buscarGlobal', 'colorDefecto', 'itemsDisplayUsuarios', 'itemsPermisos'],
    data: getDefaultData,
    destroyed() {
        document.removeEventListener("keyup", this.atajos);
    },
    mounted() {
        document.addEventListener("keyup", this.atajos);
    },
    created() {
        this.inicializar();
        this.enviarTab();
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

            let uri = this.ip + "Usuario_items";
            this.items = this.itemsDisplayUsuarios;

            this.axios.get(uri).then(response => {
                if (this.itemsDisplayUsuarios == 0 || JSON.stringify(response.data) != JSON.stringify(this.items)) {
                    this.items = response.data;
                    this.$emit("accDisplayUsuarios", this.items);
                }
            });
        },

        /*
        |--------------------------------------------------------------------------
        | Botones
        |--------------------------------------------------------------------------
        */
        clckNuevo() {
            if (!this.itemsPermisos.usuarios.valor.nuevo)
                return;

            this.$router.push({
                name: "usuarios_nuevo"
            });
        },
        clckEditar(item) {

            if (!this.itemsPermisos.usuarios.valor.editar)
                return;

            this.$router.push({
                name: "usuarios_editar",
                params: {
                    id: item.idUsuario
                }
            });
        },
        clckEliminar(item) {

            if (!this.itemsPermisos.usuarios.valor.eliminar)
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
            if (!this.itemsPermisos.usuarios.valor.eliminar)
                return;

            let uri = this.ip + `Usuario_delete/${
                this.itemEliminar.idUsuario
                }`;

            this.axios
                .get(uri)
                .then(response => {
                    var index = this.items.indexOf(this.itemEliminar);
                    if (index > -1) {
                        this.items.splice(index, 1);
                    }

                    this.$emit("mensajeInfo", "Usuario eliminado exitosamente");
                })
                .catch(error => {
                    this.$emit("mensajeError", "Ocurrió un error al eliminar, verifique su conexión.");
                });

            this.idEliminar = 0;
            this.dlgEliminar = false;
        },
        enviarTab() {
            this.$emit("accTabs", this.getIndice().toString());
            window.scrollTo(0, 0);
        },
        getIndice(){
            var indice=0;
            indice +=this.itemsPermisos.roles.permiso;
            indice +=this.itemsPermisos.personas.permiso;
            return indice;
        }
    }
};