<template>
  <div>
    <div v-if="list_collections && !get_create">
      <h3 class="section-header" v-show="items[0].groupURL != ''">
        Zotero Group:
        <a :href="( items[0].groupURL || '#')" target="_blank">{{ items[0].library }}</a>
      </h3>
      <div v-for="collection in collections" :key="collection.index">
        <Collection :title="collection.name" :collectionKey="collection.key" />
      </div>
    </div>

    <div v-if="!list_collections">
      <h3 class="section-header" v-show="items[0].groupURL != ''">
        Zotero Group:
        <a :href="( items[0].groupURL || '#')" target="_blank">{{ items[0].library }}</a>
      </h3>
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
      items: []
    };
  },
  computed: {
    ...mapGetters([
      "collectionKey",
      "submitted",
      "get_create",
      "zotero_items",
      "list_collections",
      "collections",
      "meta_data"
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
    // This method get a collection key from the parent
    //  component and fetches its items asynchronously
    if (!this.list_collections) {
      this.fetch_complete_zotero_list().then(response => {
        this.map_items(response).then(response => {
          this.$store.commit("SET_LOADING_STATUS", "done");
          this.items = response;
          window.console.log("Meta: ", this.items[0])
        });
      });
    }
  }
};
</script>
