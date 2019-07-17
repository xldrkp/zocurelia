import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import VueDates from 'vue-date-filters'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.use(VueDates)
Vue.use(VueSimpleMarkdown)

new Vue({
  render: h => h(App),
}).$mount('#app')
