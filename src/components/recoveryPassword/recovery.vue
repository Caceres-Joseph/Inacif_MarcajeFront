<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>INACIF - Recuperar contraseña</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text> 
              <v-card-actions>
                  <a href="#" target="_blank" rel="noopener">Recuperar contraseña</a>
                <v-spacer></v-spacer>
                <v-btn color="light-blue darken-4" @click="validar" dark depressed large>Acceder</v-btn>
                <v-btn
                  @click.native="clckCancelar"
                  color="blue-grey lighten-4"
                  depressed
                  large
                >Cancelar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  }
};
</script>