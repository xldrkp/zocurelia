<template>
  <span>
    <!-- <a :href="this.zotero_item_url" target="_blank">
      <img class="zotero-logo" src="@/assets/img/zotero.png" alt />
    </a> -->
    <span class="authors" v-html="list_authors"></span>
  </span>
</template>


<script>
export default {
  name: "Authors",
  props: ["authors", "zotero_item_url"],
  computed: {
    list_authors: function() {
      window.console.log("Authors list raw: ", this.authors);
      let authors = [];
      this.authors.map(value => {
        if (value.creatorType == "author") {
          if (value.name) {
            authors.push(value.name);
          } else {
            let fullName =
              value.lastName + ", " + value.firstName.substr(0, 1) + ".";
            authors.push(fullName);
          }
        }
      });
      return authors.join(", ");
    }
  }
};
</script>
