<template>
  <div>
    <h3 class="section-header" v-show="meta_data.groupURL != ''">
      Zotero Group:
      <a :href="( meta_data.groupURL || '#')" target="_blank">{{ meta_data.library }}</a>
    </h3>

    <div v-if="list_collections && !get_create">
      <div v-for="collection in collections" :key="collection.index">
        <Collection :title=collection.name :collectionKey=collection.key />
      </div>
    </div>

    <div v-if="!list_collections">
      <Item v-for="item in zotero_items" :key="item.index" :item="item" />
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
      "fetch_top_level_collections"
    ]),
    created() {}
  }
};
</script>
