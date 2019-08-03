<template>
  <div id="app">
    <Navigation />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import "@/assets/css/theme.css";
import "@/assets/css/style.css";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  methods: {
    ...mapActions(["set_groupID", "set_list_collections", "create"])
  },
  created() {
    window.console.log("App created()...");
  }
};
</script>

<style>
</style>
