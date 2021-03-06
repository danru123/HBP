// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
// import store from './store'
import animated from 'v-animate-css'
import "babel-polyfill";
Vue.use(VueResource)
Vue.config.productionTip = false
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// Vue.use(VueMaterial)

Vue.use(animated);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  components: { App },
  template: '<App/>'
})
