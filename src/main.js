// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from  '../static/js/axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */

//bootstrap table
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'

//axios
Vue.use(axios)
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
