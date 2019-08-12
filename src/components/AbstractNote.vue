<template>
  <div class="abstractNote" v-show="abstractNote != ''">
    <h5>Curation Note by <Curator /></h5>
      
    <vue-simple-markdown :class="{ more: moreToggle }" :source="abstractNote"></vue-simple-markdown>
      <a class="more-link" href="#" @click.prevent="moreToggle = !moreToggle">
        <span v-if="moreToggle">Show more</span>
        <span v-else>Show less</span>
      </a>
  </div>
</template>

<script>

import Curator from "@/components/Curator"

export default {
  name: 'AbstractNote',
  components: {
    Curator
  },
  props: [ 'abstractNote' ],
  data() {
    return {
      moreToggle: true
    }
  }
}

</script>