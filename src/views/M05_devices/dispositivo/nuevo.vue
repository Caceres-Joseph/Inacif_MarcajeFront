<template>
  <v-container fluid>
    <!-- Eliminar  --> 
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span  class="headline">Confirmar eliminado</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-4"  dark @click.native="eliminar">Eliminar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 
    <!-- Nuevo  -->
    <v-card color="grey lighten-3">
      <v-card-title>
        <span class="headline">Registrar nuevo dispositivo</span>
      </v-card-title>
      <v-card-text >
        <v-layout row wrap>
  
          <!-- Nombre -->
          <v-flex xs12>
            <v-text-field ref="focoNuevoNombre" box label="Nombre" v-model="item.nombre" required :rules="campoObligatorio" placeholder="Nombre del producto"></v-text-field>
          </v-flex>
      
          <!-- Descripcion -->
          <v-flex sm3 xs12>
            <v-text-field box label="Dirección IP" v-model="item.descripcion"></v-text-field>
          </v-flex>
  
          <v-spacer></v-spacer>
          <!-- Codigo de barras -->
          <v-flex sm3 xs12>
            <v-text-field box  label="Puerto" v-model="item.codigo" placeholder="Puerto"></v-text-field>
          </v-flex>
  
          <!-- Stock Minimo -->
          <v-spacer></v-spacer>
          <v-flex sm3 xs12>
            <v-text-field box label="Protocolo" v-model="item.stockMinimo" placeholder="0" v-mask-number></v-text-field>
            <!--  -->
          </v-flex>
          <v-spacer></v-spacer> 
  
          <!-- Categoria -->
            <v-flex xs12>
                <v-card color="white">
                    <v-layout row wrap>
                        <v-flex xs12 sm4>
                            <v-checkbox v-model="modelChekCategoria" hide-details color="blue darken-3" label="Categoría" @change="checkBoxCategoria">
                            </v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm8>
                            <v-select  deletable-chips :items="categorias" :filter="customFilter" v-model="categoriaModel" item-text="nombre" placeholder="Seleccione" autocomplete :disabled="!modelChekCategoria" ref="focoNuevoCategoria" @change="cbCambioNuevoCategoria">
                            
                                <template slot="selection" slot-scope="data">
                                <v-chip 
                                @input="data.parent.selectItem(data.item)"
                                 
                                :selected="data.selected"
                                class="chip--select-multi"
                                :key="JSON.stringify(data.item)"
                                
                                > 
                                
                                    {{ data.item.nombre }} 
                                </v-chip>
                                </template>

                                <template slot="item" slot-scope="data">
                                    <template v-if="typeof data.item !== 'object'">
                                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                                    </template>
                                    <template v-else>
                                    <v-list-tile-content>
                                        <v-list-tile-title class="black--text">{{data.item.nombre}}</v-list-tile-title>
                                        <v-list-tile-sub-title class="#ECEFF1 --text">{{data.item.rutaPadre}}</v-list-tile-sub-title>
                                        <v-list-tile-sub-title>
                                        <v-divider> </v-divider>
                                        </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    </template>
                                </template>   
                            </v-select>
                        </v-flex>  
                    </v-layout>
                </v-card> 
            </v-flex> 

            <v-divider inset></v-divider>
            <br> 
            <!-- Medida -->
            <v-flex xs12 >
                <v-card color="white" > 
                    <v-layout row wrap>
                        <v-flex xs12 sm4>
                            <v-checkbox v-model="modelChekMedida" hide-details color="blue darken-3" label="Estado" @change="checkBoxMedida">
                            </v-checkbox>
                        </v-flex>
                        <v-spacer></v-spacer>
                    
                        <v-flex xs12 sm8>
                            <v-select ref="focoMedida" :items="medidas" :filter="customFilter" v-model="MedidaModel" item-text="nombre" autocomplete :disabled="!modelChekMedida" placeholder="Seleccione" @change="cbCambioNuevoMedida">
                            </v-select>
                        </v-flex>
                    </v-layout>
                </v-card> 
            </v-flex> 

            <v-divider inset></v-divider>
            <br>  


             <v-spacer></v-spacer>
             <br>
             

            <v-divider inset></v-divider>
            <br>  

            <v-divider inset></v-divider>
            <br> 
            

        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-4"  dark @click.native="insertar">Aceptar</v-btn>
        <v-btn color="blue darken-1" flat @click.native="cancelar">Cancelar</v-btn>
      </v-card-actions>
   </v-card> 

    <!-- Snackbar -->
    <v-snackbar 
        :timeout=4000
        button   
        v-model="snackStatus"
        :color= "snackColor"
        >
        {{ sanckText }}
        <!-- <v-btn    @click.native="snackStatus = false">Cerrar</v-btn> -->
        <div>
            <v-btn  depressed small  dark :color="snackColor" @click.native="snackStatus = false" >Cerrar</v-btn>
        </div>
    </v-snackbar> 
  </v-container>
</template>

<script src ="./nuevo.js">

</script>
 