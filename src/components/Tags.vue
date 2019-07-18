<template>
  <div>
      <p class="tags" v-html="list_tags"></p>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: ["tags"],
  computed: {
      list_tags: function() {
          let tags = []
          this.tags.map( ( value ) => (
              tags.push(value.tag)
          ))
          return '<span class="badge badge-primary">' + tags.join('</span><span class="badge badge-primary">') + '</span>'
      }
  }
}
</script>
