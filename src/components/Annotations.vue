<template>
  <div class="annotation-area">
    <HypothesisGroup :hypothesis_group="hypothesis_group" :url="item.url" />
    <div style="clear: both;"></div>
    <div class="hypo-link-container">
      <a
        class="hypo-link"
        :href="'https://hyp.is/go?url=' + url + ( hypothesis_group != '' ? ('&group=' + hypothesis_group) : ('&group=__world__'))"
        target="_blank"
      >
        <span class="count" v-show="count > 0">{{ $t('annotations.count0') }}</span>
        <span class="count" v-show="count == 0">{{ $t('annotations.countX') }}</span>
        <span
          class="count badge badge-pill"
          v-bind:class="{ 'badge-info': count == 0, 'badge-primary': count > 0}"
        >{{ count }}</span>
      </a>
    </div>

    <div class="service-icons">
      <RSS :url="item.url" />
      <ZotReferenceLink :zotero_item_url="item.zotero_item_url" />
      <DashboardLink :url="item.url" />
    </div>
      <div style="clear: both;"></div>
  </div>
</template>

<script>
import HypothesisClient from "hypothesis-api-client";
import HypothesisGroup from "@/components/HypothesisGroup";
import DashboardLink from "@/components/HypothesisDocInDashboard";
import ZotReferenceLink from "@/components/ZotReferenceLink";
import RSS from "@/components/RSS";
import { mapGetters } from "vuex";

export default {
  name: "Annotations",
  props: ["item", "url"],
  components: {
    HypothesisGroup,
    RSS,
    DashboardLink,
    ZotReferenceLink
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
