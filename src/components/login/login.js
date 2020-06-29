export default {
    props: {
        buscarGlobal: String,
        ip: String,
        sede: String
    },
    data: () => ({
        /* SnackBar */
        snackColor: "teal darken-4",
        snackStatus: false,
        sanckText: " ",
        srcLogo: "",
        /* Items */
        item: {},
        drawer: null
    }),
    created() {

        this.srcLogo = this.sede + "storage/images/categorias/fondo1.png";
        this.$log.info(this.srcLogo);
        this.foco();
    },
    methods: {
        validar() {

            let uri3 = this.ip + "Usuario_validation";

            this.$log.info(uri3);
            this.axios.post(uri3, this.item).then(response => {
                if (response.data == 1) {
                    var href = this.ip + "bienvenido"; //find url
                    window.location = href;
                    //si exist el usuario
                } else {
                    this.item = {};
                    this.mensajeError("Usuario y/o contraseña incorrecta");
                    //Error en contraseña y usuario

                    this.foco();
                }
                this.$log.info(response.data);
            });

            //this.$log.info(this.item);
        },
        clckCancelar() {

            var href = "https://www.chimaltv.ga"; //find url
            window.location = href;
        },
        /*
        +------------------------------------------------+
        |   Mensajes
        +------------------------------------------------+
        */
        mensajeError(mensaje) {
            this.snackColor = "red";
            this.sanckText = "[Error] " + mensaje;
            this.snackStatus = true;
        },
        mensajeInfo(mensaje) {
            this.snackColor = "light-blue darken-4";
            this.sanckText = mensaje;
            this.snackStatus = true;
        },
        mensajeAdvertencia(mensaje) {
            this.snackColor = "amber darken-4";
            this.sanckText = "[Advertencia] " + mensaje;
            this.snackStatus = true;
        },


        foco() {

            setTimeout(() => {
                this.$nextTick(this.$refs.focoNuevoNombre.focus);
            }, 500);
        }
    }
};