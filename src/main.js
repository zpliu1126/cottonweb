import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.use(VueRouter)
Vue.use(ElementUI)

import 'animate.css'

import router from '@/routers/'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  router, //must named router
  store, //vex
  render: (h) => h(App),
}).$mount('#app')
