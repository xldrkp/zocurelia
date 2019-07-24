<template>
  <div>
    <h4 class="collection-header">{{ title }}</h4>
    <Item v-for="item in items" :key="item.index" :item="item" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Collection",
  props: ["title", "collectionKey"],
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
    ...mapGetters(["zotero_items", "collections", "meta_data"])
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

