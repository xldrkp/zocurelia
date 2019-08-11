<template>
  <div class="row">
    <div class="col-md-6">
      <h3>Get Access to Hypothesis</h3>
      <p class="lead">Enter your Hypothesis token to track your private groups.</p>
      <div class="form-row justify-content-start">
        <form class="form-row">
          <div class="col-md-8">
            <input
              id="token"
              v-model="hypothesis_token"
              type="text"
              class="form-control"
              placeholder="Enter a valid API token."
            />
          </div>
          <div class="col-md-2">
            <button @click.prevent="store()" class="btn btn-primary">Store</button>
          </div>
          <div class="col-md-2">
            <input @click="remove()" type="reset" value="Remove" class="btn btn-info" />
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-4 help">
      <h3>Help</h3>
      <p>
        You find your token
        <strong>when you're logged in to Hypothesis</strong>. Go to
        <strong>Account > Developer</strong>. Copy & paste the token to the form field.
      </p>
      <img
        class="screenshot img-fluid"
        src="@/assets/img/hypothesis_developer_key.png"
        alt="screenshot Hypothesis developer key"
      />
      <p>
        <strong>Security notice:</strong> Your token will be stored on your device only and send over a secure connection to the Hypothesis server.
      </p>
    </div>
  </div>
</template>




<script>
import HypothesisClient from "hypothesis-api-client";

export default {
  name: "HypothesisKey",
  data() {
    return {};
  },
  methods: {
    store: function() {
      let token = localStorage.getItem("hypothesis_token") || null;
      this.hac = new HypothesisClient(token);
      this.hac.getUserProfile((err, profile) => {
        if (err) {
          window.console.error(err);
        } else {
          window.console.log("Profile: ", profile);
      this.$store.commit("SET_HYPOTHESIS_ACCESS", true);
        }
      });
    },
    remove: function() {
      localStorage.removeItem("hypothesis_token");
      this.$store.commit("SET_HYPOTHESIS_ACCESS", false);
    }
  },
  computed: {
    hypothesis_token: {
      get: function() {
        return localStorage.getItem("hypothesis_token");
      },
      set: function(token) {
        localStorage.hypothesis_token = token;
      }
    }
  }
};
</script>
