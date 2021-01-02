<template>
  <v-container fluid>
    <!-- Dialogo  -->
    <v-dialog max-width="500px" v-model="dlgEliminar">
      <v-card>
        <v-card-title>
          <span class="headline">Confirmar eliminado</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click.native="btnEliminar" color="red darken-3" dark depressed large>Eliminar</v-btn>
          <v-btn
            @click.native="dlgEliminar = false"
            color="blue-grey lighten-4"
            depressed
            large
          >Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Tabla  -->
    <v-data-table
      :disable-initial-sort="true"
      :headers="encabezado"
      :items="items"
      :search="buscar"
      class="elevation-1"
      item-key="nombre"
    >
      <template slot="items" slot-scope="props">
        <td v-for="(it, key, index) in props.item" :class="getAlingItem(index)">{{it }}</td>

        <td class="justify-center layout px-0" v-if="getIfAcciones()">
          <v-btn @click="clckEditar(props.item)" class="mx-0" icon>
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn @click="clckEliminarTemp(props.item)" class="mx-0" icon>
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">No hay datos</template>
    </v-data-table>

    <!-- Boton flotante -->
    <v-btn
      @click="loader = 'loading2'; clckNuevo(loading2)" 
      bottom
      color="orange darken-4"
      dark
      fab
      fixed
      right
      :loading="loading2"
    >
    <div>
       <v-icon light>{{iconFloatButton}}</v-icon>
      </div>
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon dark>cached</v-icon>
        </span>
      </template>
    </v-btn>
  </v-container>
</template>

<script src="./eTabla.js">
</script>


<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>