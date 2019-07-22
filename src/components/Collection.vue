<template>
  <div>
    <h4>{{ collection.name }}</h4>
    <Item v-for="item in zotero_items" :key="item.idx" :item="item" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "Collection",
  props: ["collection"],
  components: {
    Item
  }
};
</script>

