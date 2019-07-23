<template>
  <div>
    <h3 class="section-header" v-show="meta_data.groupURL != ''">
      Zotero Group:
      <a :href="( meta_data.groupURL || '#')" target="_blank">{{ meta_data.name }}</a>
    </h3>
    <div v-if="list_collections && !get_create">
      <div v-for="collection in collections" :key="collection.index">
        <Collection :title="collection.name" :collectionKey="collection.key" />
      </div>
    </div>

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
      "get_create",
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
    this.fetch_complete_zotero_list(1).then(response => {
      window.console.log("Data for Library Meta: ", response.raw);
      if (response.raw.length == 1) {
        this.meta_data = {
          name: response.raw[0].library.name,
          groupURL: response.raw[0].library.links.alternate.href + "/items"
        };
      } else {
        window.console.error("No items in this library!");
      }
    });
    // This method get a collection key from the parent
    //  component and fetches its items asynchronously
    if (!this.list_collections) {
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
