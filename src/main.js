import Vue from 'vue'
import App from './App.vue'
import deepai from 'deepai'

Vue.config.productionTip = false
deepai.setApiKey('931260cc-84d8-42c5-959d-f7e1f0ec240e');
new Vue({
  render: h => h(App),
}).$mount('#app')
