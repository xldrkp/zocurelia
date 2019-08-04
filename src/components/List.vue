<template>
  <div class="container">
    <div id="action-area">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">

          <div v-show="loading_status == 'loading'">
            <div class="mt-5 col-md-12 d-flex justify-content-center">
              <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            </div>
          </div>

          <div class="alert alert-danger" v-show="loading_status == 'error'">
            <h3>An error occured!</h3>
            <p class="error">{{ get_error }}</p>
          </div>

          <v-dialog />
          <div class="d-flex justify-content-end mb-3">
            <a href="#" @click.prevent="showModal" class="share-list">
              <i class="fa d-inline fa-lg fa-share-alt-square"></i> Share with your community
            </a>
          </div>
          <Group :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group from "@/components/Group.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "List",
  components: {
    Group
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    ...mapGetters([
      "meta_data",
      "zotero_items",
      "groupID",
      "list_collections",
      "loading_status",
      "get_error"
    ])
  },
  methods: {
    ...mapActions([
      "fetch_complete_zotero_list",
      "fetch_top_level_collections",
      "map_items"
    ]),
    share: function() {
      window.console.log("Shared!");
    },
    concat_share_url: function() {
      let protocol = window.location.protocol;
      let hostname = window.location.hostname;
      let port = window.location.port;

      return protocol + "//" + hostname + ":" + port + this.$route.fullPath;
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
  },
  beforeMount() {
    // Check if the store contains a filter configuration.
    // This could be the case due to the submitted New form
    // or URL query parameters that the router caught.
    if (this.list_collections) {
      this.$store
        .dispatch(
          "fetch_top_level_collections",
          this.groupID,
          this.collectionKey
        )
        .then(() => {
          this.$store.commit("SET_SEARCH_DONE", true);
          this.$router.replace(
            "/list?groupID=" + this.groupID + "&list_collections=true"
          );
        });
    } else {
      // window.console.log("Fetching group items...");
      this.fetch_complete_zotero_list().then(response => {
        this.map_items(response).then(response => {
          this.items = response;
          window.console.log("Meta: ", this.items[0]);
          this.$store.commit("SET_LOADING_STATUS", "done");
          this.$store.commit("SET_SEARCH_DONE", true);
          this.$router.replace("/list?groupID=" + this.groupID);
        });
      });
    }
  }
};
</script>
