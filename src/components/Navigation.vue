<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#" @click.prevent="create(false)">
        <i class="fa d-inline fa-book"></i>
        &nbsp;
        <b>Zocurelia</b>
      </a>
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
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <a
          href="#"
          @click.prevent="create(true)"
          class="btn navbar-btn ml-md-2 btn-sm btn-light text-dark"
        >New</a>
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
