<template>
  <div>
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
  props: ["groupID", "subcollections", "collectionKey", "tags", "zotero_items"]
};
</script>
