import getDefaultData from "../personas/personas_displayD";


export default {
    props: ['ip', 'buscarGlobal', 'colorDefecto', 'itemsDisplayPersonas', 'itemsPermisos'],
    data: getDefaultData,
    destroyed() {
        //document.removeEventListener("keyup", this.atajos);
    },
    mounted() {
        //document.addEventListener("keyup", this.atajos);
    },
    created() {
        //this.inicializar();
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

            let uri = this.ip + "Persona_items";
            this.items = this.itemsDisplayPersonas;

            this.axios.get(uri).then(response => {

                if (this.itemsDisplayPersonas == 0 || JSON.stringify(response.data) != JSON.stringify(this.items)) {
                    this.items = response.data;
                    this.$emit("accDisplayPersonas", this.items);
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
                name: "personas_nuevo"
            });
        },
        clckEditar(item) {


            if(!this.itemsPermisos.personas.valor.editar)
                return;

            this.$router.push({
                name: "personas_editar",
                params: {
                    id: item.idPersona
                }
            });
        },
        clckEliminar(item) {

            if(!this.itemsPermisos.personas.valor.eliminar)
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

            if(!this.itemsPermisos.personas.valor.eliminar)
                return;

            let uri = this.ip + `Persona_delete/${
                this.itemEliminar.idPersona
                }`;

            this.axios
                .get(uri)
                .then(response => {
                    var index = this.items.indexOf(this.itemEliminar);
                    if (index > -1) {
                        this.items.splice(index, 1);
                    }

                    this.$emit("mensajeInfo", "Registro de persona eliminado exitosamente");
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
            return indice;
        }

    }
};