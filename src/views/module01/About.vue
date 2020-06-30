<template>
  <div class="about">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <img alt="Vue logo" src="@/assets/194-0.jpg" height="200px">
          <v-card-title primary-title>
            <div>
              <h2>Descripción de la solución del problema</h2>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-title>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              Implementar una herramienta administrativa que permita garantizar la prestación del servicio en las diferentes dependencias del INACIF; esto por medio del registro, control y seguimiento de marcajes de los empleados de acuerdo al rol de turnos establecidos por las diferentes áreas. Al madurar este sistema, se podrá obtener indicadores de control como parte de los procesos de evaluación del desempeño. Este sistema también alimentará a las herramientas de inteligencia de negocios y sistemas de evaluación del desempeño.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
        <v-spacer></v-spacer>
 
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true
  })
};
</script>