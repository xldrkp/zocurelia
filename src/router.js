import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import New from "./components/New.vue";
import List from "./components/List.vue";
import About from "./components/About.vue";
import { store } from "./main";

Vue.use(Router);

// Return the query parameters if any
function getQuery(route) {
  let params = route.query;

  window.console.log("Parameters: ", params);

  if ("groupID" in params) {
    window.console.log("Router: Group ID found!");
    store.commit("SET_GROUPID", params.groupID);
  }
  if ("list_collections" in params) {
    window.console.log("Router: I have to list all collections!");
    store.commit("SET_LIST_COLLECTION", true);
  }
  if ("collectionKey" in params) {
    window.console.log("Router: I have to list a certain collection!");
    store.commit("SET_COLLECTIONKEY", params.collectionKey);
  }

  return route.query;
}

export default new Router({
  mode: "history",
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
      component: List,
      props: getQuery,
      beforeEnter: (to, from, next) => {
        window.console.log("Checking parameters in list route...");
        next();
      }
    }
  ]
});
