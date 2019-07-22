<template>
  <div>
    <h3 class="section-header" v-show="meta_data.groupURL != ''">
      Zotero Group:
      <a :href="( meta_data.groupURL || '#')" target="_blank">{{ meta_data.library }}</a>
    </h3>

    <div v-if="list_collection">
      <div v-for="collection in get_collections" :key="collection.index">
        <Collection :collection="collection" />
      </div>
    </div>

    <Item v-for="item in zotero_items" :key="item.idx" :item="item" />
  </div>
</template>

<script>
import Collection from "@/components/Collection.vue";
import Item from "@/components/Item.vue";
import { mapActions } from "vuex";

export default {
  name: "Group",
  props: ["meta_data"],
  components: {
    Collection,
    Item
  },
  computed: {
    zotero_items: {
      get() {
        return this.$store.state.zotero_items;
      }
    },
    list_collection: {
      get: function() {
        return this.$store.getters.list_collection;
      }
    },
    get_collections: {
      get: function() {
        return this.$store.getters.get_collections;
      }
    }
  },
  methods: {
    ...mapActions(["set_groupID", "fetch_complete_zotero_list"]),
    created() {
      this.fetch_complete_zotero_list();
    }
  }
};
</script>
