<template>
  <div>
    <v-dialog />
    <div class="d-flex justify-content-end mb-3">
      <a href="#" @click.prevent="showModal" class="share-list">
        <i class="fa d-inline fa-lg fa-share-alt-square"></i> Share this list
      </a>
    </div>
    <h3 class="section-header" v-show="meta_data.groupURL != ''">
      Zotero Group:
      <a :href="( meta_data.groupURL || '#')" target="_blank">{{ meta_data.library }}</a>
    </h3>
    <div class="card" v-for="i in zotero_items" :key="i.idx">
      <div class="card-header">
        <Annotations v-if="i.url" class="float-right" :item="i" :url="i.url" />
        <span v-else class="no-full-text float-right">No online full text</span>
        <a class="title" v-if="i.url" target="_blank" :href="i.url">{{ i.title }}</a>
        <span class="title" v-else>{{ i.title }}</span>
        <Authors :authors="i.authors" :zotero_item_url="i.zotero_item_url" />
      </div>
      <div class="card-body">
        <AbstractNote :abstractNote="i.abstractNote" />
        <Tags :tags="i.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import AbstractNote from "@/components/AbstractNote.vue";
import Annotations from "@/components/Annotations.vue";
import Tags from "@/components/Tags.vue";
import Authors from "@/components/Authors.vue";

export default {
  name: "Collection",
  components: {
    Annotations,
    AbstractNote,
    Tags,
    Authors
  },
  props: ["groupID", "subcollections", "collectionKey", "tags"],
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
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
