<template>
  <div class="card">
    <div class="card-header">
      <Annotations v-if="item.url" class="float-right" :item=item :url="item.url" />
      <span v-else class="no-full-text float-right">{{ $t('item.nofulltext') }}</span>
      <h5 class="title">{{ item.title }}</h5>
      <Authors :authors="item.authors" :zotero_item_url="item.zotero_item_url" />
    </div>
    <div class="card-body">
      <AbstractNote :abstractNote="item.abstractNote" :extra="item.extra" />
    </div>
    <div class="card-footer">
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
