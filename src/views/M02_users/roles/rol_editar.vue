<template>
    <v-container fluid>

        <v-flex xs12>
            <span class="headline">Editar <br>Nombre del rol</span>
        </v-flex>
        <!-- Nombre -->
        <v-flex xs12>
            <v-text-field
                    box
                    label="Nombre"
                    placeholder="Nombre del rol"
                    ref="focoNuevo"
                    required
                    v-model="item.nombre"></v-text-field>
        </v-flex>

        <v-divider></v-divider>
        <br>
        <v-flex xs12>
            <span class="headline">Permisos</span>
        </v-flex>
        <v-flex xs12>
            <v-expansion-panel focusable>
                <v-expansion-panel-content
                        :key="item.nombre"
                        v-for="item in item.modulos">
                    <div slot="header"><span class="title">{{item.nombre}}</span></div>
                    <v-card>

                        <v-flex
                                :key="item2.nombre"
                                v-for="item2 in item.subModulos"
                                xs12>

                            <v-divider></v-divider>
                            <h4>{{item2.nombre}}</h4>
                            <v-checkbox
                                    :color="colorDefecto"
                                    :key="key"
                                    :label="key"
                                    v-for="(value, key, index) in item2.permisos"
                                    v-model="value.valor"
                            ></v-checkbox>
                        </v-flex>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>

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
        <!-- Snackbar -->
        <eSnack ref="rSnack"></eSnack>
    </v-container>
</template>

<script src="./rol_editar.js">
</script>