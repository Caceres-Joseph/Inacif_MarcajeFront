export default {

    /*
    |--------------------------------------------------------------------------
    | Datos por componente
    |--------------------------------------------------------------------------
    */
    props: {
        items: Array,
        titulo: String,
        encabezado: Array,
        clckEditar: Function,
        clckEliminar: Function,
        clckNuevo: Function,
        buscar: String, 
        iconFloatButton: {
            type: String,
            default: 'add'
          }
    },

    /*
    |--------------------------------------------------------------------------
    | Data
    |--------------------------------------------------------------------------
    */

    data: () => ({
        /*
        |------------------
        | Items temporal
        |-------------------
        */
        itemEliminar: {},
        /*
        |------------------
        | Items
        |-------------------
        */

        dlgEliminar: false,
        search: "",

        /*
        |------------------
        | Loader
        |-------------------
        */
        loader: null,
        loading: false,
        loading2: false,

    }),
    watch: {
        loader () {
          const l = this.loader
          this[l] = !this[l]
  
          setTimeout(() => (this[l] = false), 4000)
  
          this.loader = null
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Funciones
    |--------------------------------------------------------------------------
    */

    created: function () {
        this.inicializar();
    },

    /*
    |--------------------------------------------------------------------------
    | Funciones
    |--------------------------------------------------------------------------
    */

    methods: {

        /*
        |-------------------------
        | Inicio
        |-------------------------
        */
        inicializar() {
            
        },

        reset() {
            this.itemRetorno = {};
            this.$nextTick(this.$refs[0][0].focus);
        },

        /*
        |-------------------------
        | Botones
        |-------------------------
        */
        clckCancelar() {
            this.$router.push({
                name: this.configuracion['rutaCancelar']
            });
        },

        clckEliminarTemp(item) {
            this.dlgEliminar = true;
            this.itemEliminar = item;
        },
        btnEliminar() {
            this.dlgEliminar = false;
            this.clckEliminar(this.itemEliminar);
        },


        /*
        |-------------------------
        | Select
        |-------------------------
        */
        checkBox(item, nombre) {
            if (!item.check) {
                this.itemRetorno[nombre] = null;
            }
        },

        /*
        |-------------------------
        | Funciones
        |-------------------------
        */
        getIfAcciones() {
            var result = this.encabezado.filter(item=>item.text === "Acciones").length;
            return result != 0;
        },

        getAlingItem(index){
            return "text-xs-"+this.encabezado[index].align
        }
    }
}