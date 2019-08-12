<template>
  <div class="abstractNote" v-show="abstractNote != ''">
      
    <vue-simple-markdown :class="{ more: moreToggle }" :source="abstractNote"></vue-simple-markdown>
    <Curator :extra="extra" />
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
  props: [ 'abstractNote', 'extra' ],
  data() {
    return {
      moreToggle: true
    }
  }
}

</script>