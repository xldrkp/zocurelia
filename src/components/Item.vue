<template>
  <div class="card">
    <div class="card-header">
      <Annotations v-if="item.url" class="float-right" :item="i" :url="item.url" />
      <span v-else class="no-full-text float-right">No online full text</span>
      <a class="title" v-if="item.url" target="_blank" :href="item.url">{{ item.title }}</a>
      <span class="title" v-else>{{ item.title }}</span>
      <Authors :authors="item.authors" :zotero_item_url="item.zotero_item_url" />
    </div>
    <div class="card-body">
      <AbstractNote :abstractNote="item.abstractNote" />
      <Tags :tags="item.tags" />
    </div>
  </div>
</template>


<script>
import Annotations from "@/components/Annotations.vue";
import AbstractNote from "@/components/AbstractNote.vue";
import Tags from "@/components/Tags.vue";
import Authors from "@/components/Authors.vue";

export default {
  name: "Item",
  components: {
    Annotations,
    AbstractNote,
    Tags,
    Authors
  },
  props: ["groupID", "subcollections", "collectionKey", "tags", "item"]
};
</script>
