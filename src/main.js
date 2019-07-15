import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import VueDates from 'vue-date-filters'

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.use(VueDates)

new Vue({
  render: h => h(App),
}).$mount('#app')
