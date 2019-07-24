<template>
  <div id="app">
    <Navigation />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Dashboard from "./components/Dashboard.vue";
import Footer from "./components/Footer.vue";
import "@/assets/css/theme.css";
import "@/assets/css/style.css";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Navigation,
    Dashboard,
    Footer
  },
  methods: {
    ...mapActions(["set_groupID", "set_list_collections", "create"]),
    parse_query_string: function() {
      // Credits to https://www.joezimjs.com/javascript/3-ways-to-parse-a-query-string-in-a-url/
      let queryString = window.location.search.substring(1);
      let params = {},
        queries,
        temp,
        i,
        l;
      // Split into key/value pairs
      queries = queryString.split("&");
      // Convert the array of strings into an object
      for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split("=");
        params[temp[0]] = temp[1];
      }
      return params;
    }
  },
  created() {
    window.console.log("App created()...");
    window.console.log(this.parse_query_string());
    let params = this.parse_query_string();
    if ("groupID" in params) {
      this.$store.commit("SET_LOADING_STATUS", "done");
      window.console.log("Group ID found!");
      this.set_groupID(params.groupID);
    }
    if ("list_collections" in params) {
      window.console.log("I have to list all collections!");
      this.set_list_collections(params.list_collections);
    }
  }
};
</script>

<style>
</style>
