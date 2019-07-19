<template>
  <div class="d-inline">
    <a class="hypo-link" :href="'https://via.hypothes.is/' + url" target="_blank">
      <span v-show="count > 0">Keep annotating!</span>
      <span v-show="count == 0">Start annotating!</span>
    </a>

    <span
      class="badge badge-pill"
      v-bind:class="{ 'badge-warning': count == 0, 'badge-primary': count > 0}"
    >{{ count }}</span>
  </div>
</template>

<script>
import HypothesisClient from "hypothesis-api-client";

export default {
  name: "Annotations",
  props: ["item", "url"],
  data() {
    return {
      count: 0,
      latest: undefined,
      hac: Object
    };
  },
  methods: {
    url_exists(item) {
      return item.url != "" || false;
    }
  },
  asyncComputed: {
    get_count: {
      async get() {
        this.hac = new HypothesisClient("");

        if (this.url_exists(this.item)) {
          await this.hac.searchAnnotations(
            { url: this.item.url },
            (err, annotations) => {
              window.console.log(annotations);
              this.count = annotations.length;
              // this.latest = annotations[0]["created"]
            }
          );
        } else {
          this.count = 0;
        }
      }
    }
  }
};
</script>
