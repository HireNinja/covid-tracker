import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'
import router from './router';
import VueGoogleCharts from 'vue-google-charts'
import "./mixins/global";
import VueSession from "vue-session";

Vue.use(VueGoogleCharts)
Vue.config.productionTip = false
Vue.use(VueSession);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
