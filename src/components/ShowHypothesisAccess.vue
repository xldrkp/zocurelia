<template>
  <a v-show="check_hypothesis_access" class="nav-link">
    <i class="fa fa-users"></i>
  </a>
</template>

<script>
export default {
  name: "ShowHypothesisAccess",
  computed: {
    check_hypothesis_access() {
      return this.$store.getters.hypothesis_access;
    }
  }
};
</script>
