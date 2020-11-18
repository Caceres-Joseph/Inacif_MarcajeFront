<template>
    <v-container fluid>





        <!-- Tabla  -->
        <v-data-table
                :disable-initial-sort="true"
                :headers="headers"
                :items="items" 
                class="elevation-1"
                item-key="idRol"
        >
            <template slot="items" slot-scope="props">


                <td @click="props.expanded = !props.expanded" class="text-xs-left">{{ props.item.idRol }}</td>
                <td @click="props.expanded = !props.expanded" class="text-xs-left">{{ props.item.nombre }}</td>

                <td class="justify-center layout px-0">
                    <v-btn
                            class="mx-0" icon>
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn
                            class="mx-0" icon>
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>

            </template>
            
            <template slot="no-data">
                No hay datos
            </template>
        </v-data-table>



        <!-- Boton flotante -->
        <v-btn
        
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