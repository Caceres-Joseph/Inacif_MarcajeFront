import Dropdown from "bp-vuejs-dropdown";
import eSnack from "../SnackBar/eSnack.vue";

export default {

    /*
    |--------------------------------------------------------------------------
    | Datos por componente
    |--------------------------------------------------------------------------
    */
    props: {
        colorBarra: String,
        subModulos: Array,
        atajos1: Array,
        chip: Object
    },
    components: {
        Dropdown,
        eSnack
    },

    /*
    |--------------------------------------------------------------------------
    | Data
    |--------------------------------------------------------------------------
    */

    data: () => ({
        tabs: -1,
        searchParent: "",
        dlgAtajos: false,
        dlgBug: false,
        itemBug: {},
        colorDefecto: "orange darken-4",
        srcImagen: "",
        srcLogo: "",
        inicial: "-",


        itemsPersonas: [],
        itemsRols: [],
        itemsUsuarios: [],
    }),

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
            this.getUser();
            this.listener();
        },

        reset() {
            this.itemRetorno = {};
            this.$nextTick(this.$refs[0][0].focus);
        },


        listener() {
            window.addEventListener("keydown", e => {
                if (e.ctrlKey && e.code === "KeyF") {
                    //buscar

                    this.$nextTick(this.$refs.focoBuscar.focus);
                }
            });
        },


        /*
        |--------------------------------------------------------------------------
        | Otras operaciones
        |--------------------------------------------------------------------------
        */
        getUser() {

            this.inicial = "U"
        },
        bug() {
            this.hiddenMenu();
            this.takeScreen();
            this.dlgBug = true;


            setTimeout(() => {
                this.$nextTick(this.$refs.focoBug.focus);
            }, 500);

        },
        atajos() {
            this.hiddenMenu();
            this.dlgAtajos = true;


            this.$nextTick(() => this.$refs.btnAtajos.$el.focus())

        },
        salir() {

            var href = "/"//find url
            window.location = href;

        },
        inicio() {
            this.hiddenMenu();
            this.searchParent = "";
            //lendo a home
            var href = "/menu"; //find url
            window.location = href;
        },


        /*
        |--------------------------------------------------------------------------
        | SubModulos
        |--------------------------------------------------------------------------
        */

        reportarBug() {
            let uri = "/Bug_insert";

            this.axios
                .post(uri, this.itemBug)
                .then(response => {
                    this.$refs.rSnack.mensajeInfo(
                        "Se reportó correctamente, le agradecemos sus comentarios"
                    );
                    this.dlgBug = false;
                    this.itemBug = {};
                })
                .catch(error => {
                    this.$refs.rSnack.mensajeError("No se pudó reportar correctamente");
                });
        },
        takeScreen() {

        },
        hiddenMenu() {
            this.$refs.dropdown.isHidden = true;
        },

        /*
        |--------------------------------------------------------------------------
        | Botones
        |--------------------------------------------------------------------------
        */
        mensajeInfo(mensaje) {
            this.$refs.rSnack.mensajeInfo(
                mensaje
            );
        },
        mensajeError(mensaje) {

            this.$refs.rSnack.mensajeError(
                mensaje
            );
        },
        mensajeAdvertencia(mensaje) {

            this.$refs.rSnack.mensajeAdvertencia(
                mensaje
            );
        },




    }
}