import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.js";

Vue.use(Router);
export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
  mode: "history"
});
