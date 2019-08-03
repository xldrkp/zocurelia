import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import New from "./components/New.vue";
import List from "./components/List.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/new",
      name: "new",
      component: New
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/list",
      name: "list",
      component: List
    }
  ]
});
