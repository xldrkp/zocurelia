<template>
  <div class="row">
    <div class="col-md-6">
      <h3>Get Access to Hypothesis</h3>
      <p class="lead">Enter your Hypothesis token to track your private groups.</p>
      <div class="form-row justify-content-start">
        <div class="col-md-10">
          <input
            id="token"
            v-model="hypothesis_token"
            type="text"
            class="form-control"
            placeholder="Enter a valid API token."
          />
        </div>
        <div class="col">
          <button @click="reset()" class="btn btn-primary">Reset</button>
        </div>
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
export default {
  name: "HypothesisKey",
  data() {
    return {};
  },
  methods: {
    reset: function() {
      localStorage.hypothesis_token = "";
    }
  },
  computed: {
    hypothesis_token: {
      get: function() {
        return localStorage.hypothesis_token;
      },
      set: function(token) {
        localStorage.hypothesis_token = token;
      }
    }
  }
};
</script>
