<template>
    <v-container fluid>

        <!-- Dialogo  -->
        <v-dialog
                v-model="dlgEliminar"
                max-width="500px">

            <v-card>
                <v-card-title>
                    <span  class="headline">Confirmar eliminado</span>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            large
                            depressed
                            color="red darken-3"
                            @click.native="btnEliminar"
                            dark>Eliminar</v-btn>
                    <v-btn
                            large
                            depressed
                            color="blue-grey lighten-4"
                            @click.native="dlgEliminar = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>


        <!-- Tabla  -->
        <v-data-table
                :disable-initial-sort="true"
                :headers="headers"
                :items="itemsDisplayRols"
                :search="buscarGlobal"
                class="elevation-1"
                item-key="idRol"
        >
            <template slot="items" slot-scope="props">


                <td @click="props.expanded = !props.expanded" class="text-xs-left">{{ props.item.idRol }}</td>
                <td @click="props.expanded = !props.expanded" class="text-xs-left">{{ props.item.valor.nombreRol }}</td>

                <td class="justify-center layout px-0">
                    <v-btn
                            v-if="itemsPermisos.roles.valor.editar"
                            @click="clckEditar(props.item)"
                            class="mx-0" icon>
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn

                            v-if="itemsPermisos.roles.valor.eliminar"
                            @click="clckEliminar(props.item)"
                            class="mx-0" icon>
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>

            </template>
            <template slot="expand" slot-scope="props">

                <v-card>
                    <v-container
                            fluid
                            grid-list-lg
                            style="min-height: 0;"
                    >
                        <v-layout row wrap>
                            <v-flex :key="index" v-for="(value, key, index) in props.item.valor" v-if='key!="nombreRol"'
                                    xs12>
                                <v-card class="white--text" color="blue-grey darken-2">
                                    <v-card-text>
                                        <div>
                                            <span class="headline">{{key}}<br></span>
                                            <v-layout row wrap>
                                                <v-flex :key="index2" lg3 md3 v-for="(value2,key2,index2) in value"
                                                        xs12>

                                                    <v-card color="blue-grey darken-1">
                                                        <v-card-title>
                                                            <div>
                                                                <span class="title white--text">{{key2}}<br></span>

                                                                <v-divider dark></v-divider>
                                                                <span :key="index3"
                                                                      class="white--text"
                                                                      v-for="(value3,key3,index3) in value2[0].vals"
                                                                      v-if='value3!=0'
                                                                >&nbsp;{{key3}}<br></span>
                                                            </div>
                                                        </v-card-title>

                                                    </v-card>
                                                </v-flex>
                                            </v-layout>

                                        </div>

                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>

            </template>
            <template slot="no-data">
                No hay datos
            </template>
        </v-data-table>

        <!-- Boton flotante -->
        <v-btn
                v-if="itemsPermisos.roles.valor.nuevo"
                :color="colorDefecto"
                @click="clckNuevo"
                bottom
                dark
                fab
                fixed
                right
        >
            <div>
                <v-icon medium>add</v-icon>
            </div>
        </v-btn>


    </v-container>
</template>


<script src="./rol_display.js">
</script>