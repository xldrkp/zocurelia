<template>
  <div class="mt-3">
    <h4 class="collection-header"><a target="_blank" :href="collectionURL">{{ title }}</a> <span class="collection-key">&nbsp;{{ collectionKey }}</span></h4>
    <Item v-for="item in items" :key="item.index" :item="item" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Collection",
  props: ["title", "collectionKey", "groupURL"],
  components: {
    Item
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    ...mapActions(["fetch_single_collection", "map_items"])
  },
  computed: {
    ...mapGetters(["zotero_items", "collections", "meta_data"]),
    collectionURL: function() {
      return `${this.groupURL}/items/collectionKey/${this.collectionKey}`
    }
  },
  created() {
    // This method get a collection key from the parent
    //  component and fetches its items asynchronously
    this.fetch_single_collection(this.collectionKey).then(response => {
      window.console.log("The response: ", response);
      this.map_items(response).then(response => {
        window.console.log("Items: ", response);
        this.$store.commit("SET_LOADING_STATUS", "done");
        this.items = response;
      });
    });
  }
};
</script>

