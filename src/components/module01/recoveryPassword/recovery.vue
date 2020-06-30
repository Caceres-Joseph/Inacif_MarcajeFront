<template>
  <v-app id="inspire">
    <v-content>
      <v-parallax
        src="https://pbs.twimg.com/media/DdwPRQtUwAAO6CF?format=jpg&name=4096x4096"
        :height="800"
      >
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs8 sm6 md6>
              <v-card class="elevation-21">
                <v-toolbar dark color="light-blue darken-4">
                  <v-toolbar-title>INACIF - Recuperar contraseña</v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>

                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="item.usuario"
                      prepend-icon="person"
                      ref="focoNuevoNombre"
                      name="login"
                      label="Correo electrónico"
                      type="text"
                    ></v-text-field>
                    
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  
                  <v-spacer></v-spacer>
                  <v-btn color="light-blue darken-4" @click="validar" dark depressed large>Enviar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-content>
    <!-- Snackbar -->
    <v-snackbar :timeout="3000" button v-model="snackStatus" :color="snackColor">
      {{ sanckText }}
      <!-- <v-btn    @click.native="snackStatus = false">Cerrar</v-btn> -->
      <div>
        <v-btn depressed small dark :color="snackColor" @click.native="snackStatus = false">Cerrar</v-btn>
      </div>
    </v-snackbar>
    <v-footer color="grey lighten-5" height="auto">
      <v-layout row wrap justify-center>
        <v-flex xs12 py-3 text-xs-center gray --text>
          <strong>&copy;{{ new Date().getFullYear() }} USAC</strong> - josephccaceres@gmail.com
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script src ="./recovery.js">
