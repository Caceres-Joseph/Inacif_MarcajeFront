export default function getDefaultData() {
    return {
        /*
        |------------------
        | Items temporal
        |-------------------
        */
        itemEliminar:0,
        /*
        |------------------
        | Items
        |-------------------
        */
        headers: [
            {
                text: "idRol",
                width: "3",
                sortable: false
            },
            {
                text: "Rol",
                value: "valor.nombreRol"
            },
            {
                text: "Acciones",
                sortable: false,
                align: 'center'
            }
        ], 
        items:[]
        ,
        dlgEliminar:false
    }
}