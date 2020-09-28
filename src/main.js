import Vue from 'vue'
import App from './App.vue'
import deepai from 'deepai'
import router from './router'

Vue.config.productionTip = false
deepai.setApiKey('931260cc-84d8-42c5-959d-f7e1f0ec240e');
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
