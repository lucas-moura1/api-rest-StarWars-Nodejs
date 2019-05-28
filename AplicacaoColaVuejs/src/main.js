import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'; //mportando  o modulo

Vue.use(VueResource); //Registrando o modulo/plugin no global view object

new Vue({
  el: '#app',
  render: h => h(App)
})
