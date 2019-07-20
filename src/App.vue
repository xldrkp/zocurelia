<template>
  <div id="app">
    <Navigation />
    <Dashboard />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Dashboard from "./components/Dashboard.vue";
import "@/assets/css/theme.css";
import "@/assets/css/style.css";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Navigation,
    Dashboard
  },
  methods: {
    ...mapActions(["set_groupID"]),
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
    window.console.log(this.parse_query_string());
    let params = this.parse_query_string();
    if ("groupID" in params) {
      window.console.log("Group ID found!");
      this.set_groupID(params.groupID);
    }
  }
};
</script>

<style>
</style>
