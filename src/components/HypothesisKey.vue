<template>
  <div class="row">
    <div class="col-md-8">
      <h4>{{ $t('settings.hypothesisKey.headline') }}</h4>
      <p class="lead">{{ $t('settings.hypothesisKey.description') }}</p>
      <div class="form-row justify-content-start">
        <form class="form-row">
          <div class="col-md-7">
            <input
              id="token"
              v-model="hypothesis_token"
              type="text"
              class="form-control"
              placeholder="Enter a valid API token."
            />
          </div>
          <div class="col-md-3">
            <button
              @click.prevent="store()"
              class="btn btn-primary"
            >{{ $t('settings.hypothesisKey.button-store') }}</button>
          </div>
          <div class="col-md-2">
            <input
              @click="remove()"
              type="reset"
              :value="$t('settings.hypothesisKey.button-reset')"
              class="btn btn-info"
            />
          </div>
        </form>
      </div>
      <div
        v-if="login_success"
        class="alert alert-success mt-3"
        role="alert"
      >{{ $t('settings.hypothesisKey.success') }}</div>
      <div
        class="alert alert-danger mt-3"
        role="alert"
        v-if="login_success === false"
      >{{ $t('settings.hypothesisKey.error') }}</div>
    </div>
    <div class="col-md-4 help">
      <h3>{{ $t('settings.hypothesisKey.help.headline') }}</h3>
      <p>
        <span v-html="$t('settings.hypothesisKey.help.token-info')"></span>
      </p>
      <img
        class="screenshot img-fluid"
        src="@/assets/img/hypothesis_developer_key.png"
        alt="screenshot Hypothesis developer key"
      />
      <p>
        <span v-html="$t('settings.hypothesisKey.help.security-info')"></span>
      </p>
    </div>
  </div>
</template>




<script>
import HypothesisClient from "hypothesis-api-client";

export default {
  name: "HypothesisKey",
  data() {
    return {
      login_success: null
    };
  },
  methods: {
    store: function() {
      let token = localStorage.getItem("hypothesis_token") || null;
      this.hac = new HypothesisClient(token);
      this.hac.getUserProfile((err, profile) => {
        if (err) {
          window.console.error(err);
          this.login_success = false;
        } else {
          this.login_success = true;
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
  },
  beforeDestroy() {
    // this.login_success = null;
  }
};
</script>
