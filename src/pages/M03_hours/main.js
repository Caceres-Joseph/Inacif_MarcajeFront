import Vue from 'vue'
import App from './App.vue'
import router from '@/router/M03_hours.js'
import store from '@/store'

//Plugins
//import vuetify from './plugins/vuetify.js' // path to vuetify export

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  //vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
