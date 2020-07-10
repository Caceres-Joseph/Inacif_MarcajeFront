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
                    nombre: 'clientes',
                    subModulos: [
                        {
                            nombre: 'ubicaciones',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}
                                }

                        },
                        {
                            nombre: 'planes',
                            permisos:
                                {
                                    nuevo: {valor: false},
                                    editar: {valor: false},
                                    eliminar: {valor: false},
                                    ver: {valor: false}

                                }

                        },
                        {
                            nombre: 'clientes',
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
                    nombre: 'personas',
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
                }
            ],
        },

    }
}