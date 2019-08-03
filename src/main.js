import Vue from "vue";
import Vuex from 'vuex'
import App from "./App.vue";
import AsyncComputed from "vue-async-computed";
import VueDates from "vue-date-filters";
import VueSimpleMarkdown from "vue-simple-markdown";
import storeConfig from "./store/store-config";
import router from "./router"
// import store from "./store";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;

Vue.use(AsyncComputed);
Vue.use(VueDates);
Vue.use(VueSimpleMarkdown);
Vue.use(VModal, { dialog: true });
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
