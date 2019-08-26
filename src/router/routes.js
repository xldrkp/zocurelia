import { store } from "../main";
import { Trans } from "@/plugins/Translation";

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
  if ("hypothesis_group" in params) {
    window.console.log("Router: I have to access a private Hypothesis group!");
    store.commit("SET_HYPOTHESIS_GROUP", params.hypothesis_group);
  }

  return route.query;
}

export default [
  {
    path: "/:lang",
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: "",
        name: "home",
        component: require("@/components/Home.vue").default
      },
      {
        path: "new",
        name: "new",
        component: require("@/components/New.vue").default
      },
      {
        path: "about",
        name: "about",
        component: require("@/components/About.vue").default
      },
      {
        path: "help",
        name: "help",
        component: require("@/components/Help.vue").default
      },
      {
        path: "settings",
        name: "settings",
        component: require("@/components/Settings.vue").default
      },
      {
        path: "list",
        name: "list",
        component: require("@/components/List.vue").default,
        props: getQuery
        // beforeEnter: (to, from, next) => {
        // window.console.log("Checking parameters in list route...");
        // next();
        // }
      }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: "*",
    redirect(_to) {
      return Trans.getUserSupportedLang();
    }
  }
];
