<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fa d-inline fa-book"></i>
        &nbsp;
        <b>Zocurelia</b>
      </router-link>
      <button
        class="navbar-toggler navbar-toggler-right border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbar16"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar16">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <router-link class="btn navbar-btn ml-md-2 btn-sm btn-light text-dark" to="/new" replace>New</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navigation",
  methods: {
    ...mapActions(["create"])
  },
  computed: {
    ...mapGetters(["get_create"])
  }
};
</script>
