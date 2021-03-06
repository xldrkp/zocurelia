import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import AsyncComputed from "vue-async-computed";
import VueDates from "vue-date-filters";
import VueSimpleMarkdown from "vue-simple-markdown";
import storeConfig from "./store/store-config";
import router from "./router/";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
import VModal from "vue-js-modal";
import { i18n } from '@/plugins/i18n'
import { Trans } from './plugins/Translation'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false;

Vue.use(AsyncComputed);
Vue.use(VueDates);
Vue.use(VueSimpleMarkdown);
Vue.use(VModal, { dialog: true });
Vue.use(Vuex);

export const store = new Vuex.Store(storeConfig);

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
