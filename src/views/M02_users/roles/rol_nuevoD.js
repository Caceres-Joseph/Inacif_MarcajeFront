export default function getDefaultData() {
    return {
        /*
        |------------------
        | Items
        |-------------------
        */
        item: {
            nombre: "",
            modulos: [

                {
                    nombre: 'Módulo 02',
                    subModulos: [
                        {
                            nombre: 'roles',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }

                        },
                        {
                            nombre: 'personas',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }

                        },
                        {
                            nombre: 'usuarios',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }
                        }
                    ]
                },
                {
                    nombre: 'Módulo 03',
                    subModulos: [
                        {
                            nombre: 'Permiso1',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }

                        },
                        {
                            nombre: 'Permiso2',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}

                                }

                        },
                        {
                            nombre: 'Permiso3',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }

                        }
                    ]
                },
            ],
        },

    }
}