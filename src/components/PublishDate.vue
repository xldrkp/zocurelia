<template>
  <span>
    <span class="pub_date" v-html="show_pub_date"></span>
  </span>
</template>


<script>
export default {
  name: "PublishDate",
  props: ["pub_date"],
  computed: {
    show_pub_date: function() {
      return ` (${this.pub_date})`;
    }
  }
};
</script>
