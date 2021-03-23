// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axiosTest from  '../static/js/axios/axiostest'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axiosTest = axiosTest
/* eslint-disable no-new */

//bootstrap table
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'

//axios
//request

import request from '../static/js/axios/request'
Vue.prototype.$axios = request

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
