<template>
  <div>
    <v-dialog />
    <div class="d-flex justify-content-end mb-3">
      <a href="#" @click.prevent="showModal" class="share-list">
        <i class="fa d-inline fa-lg fa-share-alt-square"></i> Share this list
      </a>
    </div>
    <Group :meta_data="meta_data" />
    <!-- <Item v-for="item in zotero_items" :key="item.idx" :item="item" /> -->
  </div>
</template>

<script>
import Group from "@/components/Group.vue";
// import Item from "@/components/Item.vue";

export default {
  name: "Result",
  components: {
    Group
  },
  data() {
    return {
      list_url: "http://localhost"
    };
  },
  computed: {
    meta_data: {
      get() {
        return this.$store.state.meta_data;
      }
    },
    zotero_items: {
      get() {
        return this.$store.state.zotero_items;
      }
    },
    groupID: {
      get: function() {
        return this.$store.getters.groupID;
      }
    },
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
        "/?" +
        "groupID=" +
        this.groupID
      );
    },
    showModal() {
      this.$modal.show("dialog", {
        title: "Share this Zotero Annotated Reading List",
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
  created() {}
};
</script>
