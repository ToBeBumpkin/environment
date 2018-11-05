import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/index.less'
import ImgExport from "./mixin/ImgExport"
Vue.mixin(ImgExport)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
