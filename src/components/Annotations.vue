<template>
  <div class="d-inline">
    <a
      class="hypo-link"
      :href="'https://hyp.is/go?url=' + url + ( hypothesis_group != '' ? ('&group=' + hypothesis_group) : ('&group=__world__'))"
      target="_blank"
    >
      <span v-show="count > 0">{{ $t('annotations.count0') }}</span>
      <span v-show="count == 0">{{ $t('annotations.countX') }}</span>
    </a>

    <span
      class="badge badge-pill"
      v-bind:class="{ 'badge-info': count == 0, 'badge-primary': count > 0}"
    >{{ count }}</span>
    <HypothesisGroup :hypothesis_group="hypothesis_group" :url="item.url" />
  </div>
</template>

<script>
import HypothesisClient from "hypothesis-api-client";
import HypothesisGroup from "@/components/HypothesisGroup";
import { mapGetters } from "vuex";

export default {
  name: "Annotations",
  props: ["item", "url"],
  components: {
    HypothesisGroup
  },
  data() {
    return {
      count: 0,
      latest: undefined,
      hac: Object
    };
  },
  computed: {
    ...mapGetters(["hypothesis_group"])
  },
  methods: {
    url_exists(item) {
      return item.url != "" || false;
    }
  },
  asyncComputed: {
    get_count: {
      async get() {
        let token = localStorage.getItem("hypothesis_token") || null;
        this.hac = new HypothesisClient(token);

        let search_options = this.$store.getters.hypothesis_group
          ? {
              url: this.item.url,
              group: this.$store.getters.hypothesis_group
            }
          : {
              url: this.item.url,
              group: "__world__"
            };

        if (this.url_exists(this.item)) {
          await this.hac.searchAnnotations(
            search_options,
            (err, annotations) => {
              window.console.log("Annotations: ", annotations);
              this.count = annotations.length;
            }
          );
        } else {
          this.count = 0;
        }
      }
    }
  },
  created() {
    window.console.log("Group ID:", this.hypothesis_group);
  }
};
</script>
