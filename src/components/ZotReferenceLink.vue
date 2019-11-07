<template>
  <span>
      <a :title="$t('zotero.tooltip')" target="_blank" :href="zotero_item_url">
          <img class="service-icon" src="@/assets/img/zotero.png" alt="">
      </a>
  </span>
</template>


<script>
export default {
  name: "ZotReferenceLink",
  props: ["zotero_item_url"],
};
</script>
