<template>
  <div>
    <vue-simple-markdown :class="{ more: moreToggle }" :source="abstractNote"></vue-simple-markdown>
      <a href="#" @click="moreToggle = !moreToggle">
        <span v-if="moreToggle">Show more</span>
        <span v-else>Show less</span>
      </a>
  </div>
</template>

<script>

export default {
  name: 'AbstractNote',
  props: [ 'abstractNote' ],
  data() {
    return {
      moreToggle: true
    }
  }
}

</script>