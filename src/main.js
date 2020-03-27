import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'
import router from './router';
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
