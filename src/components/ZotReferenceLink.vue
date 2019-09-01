<template>
  <span>
      <a target="_blank" :href="zotero_item_url">
          <img class="zotero-logo" src="@/assets/img/zotero.png" alt="">
      </a>
  </span>
</template>


<script>
export default {
  name: "ZotReferenceLink",
  props: ["zotero_item_url"],
};
</script>
