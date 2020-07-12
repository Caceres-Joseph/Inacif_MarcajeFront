<template>
    <v-container fluid>

        <v-card color="grey lighten-3">
            <v-card-title>
                <span class="headline">Nuevo Usuario</span>
            </v-card-title>
            <v-card-text>
                <v-layout
                        row
                        wrap>
                    <v-flex xs12>
                        <v-text-field
                                label="Nombre"
                                ref="focoNuevo"
                                box
                                required
                                v-model="item.nombre"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-text-field
                                label="Contraseña"
                                box
                                type="password"
                                v-model="item.password"
                        ></v-text-field>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm5>
                        <v-text-field
                                label="Repita la contraseña"
                                box
                                type="password"
                                v-model="item.password1"
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 >
                        <v-checkbox
                                label="Activo"
                                v-model="item.activo"
                                hide-details
                                :color="colorDefecto"
                        ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 >
                        <v-select :items="personas" @change="cbCambioNuevoUsuario" autocomplete item-text="nombre"
                                  placeholder="Seleccione una persona" v-model="cbPersonaModel">
                        </v-select>
                    </v-flex>

                </v-layout>
            </v-card-text>


            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        :color="colorDefecto"
                        @click.native="clckAceptar"
                        dark
                        depressed
                        large>Aceptar
                </v-btn>
                <v-btn
                        @click.native="clckCancelar"
                        color="blue-grey lighten-4"
                        depressed
                        large>Cancelar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script src="./usuario_nuevo.js">
</script>
