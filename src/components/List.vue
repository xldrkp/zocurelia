<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <v-dialog />
        <div class="d-flex justify-content-end mb-3">
          <a href="#" @click.prevent="showModal" class="share-list">
            <i class="fa d-inline fa-lg fa-share-alt-square"></i> Share this list
          </a>
        </div>
        <Group :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import Group from "@/components/Group.vue";
import { mapGetters } from "vuex";

export default {
  name: "Result",
  components: {
    Group
  },
  props: ["items"],
  data() {
    return {
      list_url: "http://localhost"
    };
  },
  computed: {
    ...mapGetters(["meta_data", "zotero_items", "groupID", "list_collections"])
  },
  methods: {
    share: function() {
      window.console.log("Shared!");
    },
    concat_share_url: function() {
      let protocol = window.location.protocol;
      let hostname = window.location.hostname;
      let port = window.location.port;

      return (
        protocol +
        "//" +
        hostname +
        ":" +
        port +
        "/#/list?" +
        "groupID=" +
        this.groupID +
        (this.list_collections ? "&list_collections=true" : "")
      );
    },
    showModal() {
      this.$modal.show("dialog", {
        title: "Share this Zotero Curated Reading List",
        text:
          "<p>Give this URL to others so that they can participate.</p><input class='form-control' type='text' value='" +
          this.concat_share_url() +
          "'/>",
        buttons: [
          {
            title: "Copy URL",
            handler: () => {}
          },
          {
            title: "", // Button title
            default: true, // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: "Close"
          }
        ]
      });
    }
  },
  created() {
    window.console.log("Result created()...");
  }
};
</script>
