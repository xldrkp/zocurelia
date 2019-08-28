<template>
  <div class="mt-4">
    <h3 class="section-header" v-show="meta_data.groupURL != ''">
      <a :href="( meta_data.groupURL || '#')" target="_blank">{{ meta_data.name }}</a>
    </h3>

    <!-- Multiple collections -->
    <div v-if="list_collections && !get_init">
      <div v-for="collection in collections" :key="collection.index">
        <Collection :title="collection.name" :collectionKey="collection.key" />
      </div>
    </div>

    <!-- Single collection -->
    <div v-if="list_collections && collectionKey != null && !get_init">
      <Collection :title="collectionKey" :collectionKey="collectionKey" />
    </div>

    <!-- Complete library -->
    <div v-if="!list_collections">
      <Item v-for="item in items" :key="item.index" :item="item" />
    </div>
  </div>
</template>

<script>
import Collection from "@/components/Collection.vue";
import Item from "@/components/Item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Group",
  components: {
    Collection,
    Item
  },
  data() {
    return {
      items: [],
      meta_data: {}
    };
  },
  computed: {
    ...mapGetters([
      "collectionKey",
      "submitted",
      "get_init",
      "zotero_items",
      "list_collections",
      "collections"
    ])
  },
  methods: {
    ...mapActions([
      "set_groupID",
      "fetch_complete_zotero_list",
      "fetch_top_level_collections",
      "map_items"
    ])
  },
  created() {

    // Get only one item to get the library title etc.
    window.console.log("Inside Group created()...");
    this.fetch_complete_zotero_list(1).then(response => {
      window.console.log("Data for Library Meta: ", response.raw);
      if (response.raw.length == 1) {
        this.meta_data = {
          name: response.raw[0].library.name,
          groupURL: response.raw[0].library.links.alternate.href + "/items",
          description: response.raw[0].library.description
        };
      } else {
        window.console.error("No items in this library!");
      }
    });

// List all collections
    if (this.list_collections && this.collectionKey === null) {
      this.$store
        .dispatch(
          "fetch_top_level_collections",
          this.groupID,
          this.collectionKey
        )
        .then(() => {
          this.$store.commit("SET_SEARCH_DONE", true);
        });
    }

    // List the complete library if collection is false
    else if (!this.list_collections) {
      this.fetch_complete_zotero_list().then(response => {
        this.map_items(response).then(response => {
          this.$store.commit("SET_LOADING_STATUS", "done");
          this.items = response;
          window.console.log("Meta: ", this.items[0]);
        });
      });
    }
  }
};
</script>
