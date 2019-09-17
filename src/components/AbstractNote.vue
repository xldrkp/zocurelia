<template>
  <div class="abstractNote" v-show="abstractNote != ''">
    <vue-simple-markdown
      :postrender="prerender"
      :class="{ more: moreToggle }"
      :source="abstractNote"
    ></vue-simple-markdown>
    <Curator :extra="extra" />
    <a class="more-link" href="#" @click.prevent="moreToggle = !moreToggle">
      <span v-if="moreToggle">{{ $t('abstract.show_more') }}</span>
      <span v-else>{{ $t('abstract.show_less') }}</span>
    </a>
  </div>
</template>

<script>
import Curator from "@/components/Curator";

export default {
  name: "AbstractNote",
  components: {
    Curator
  },
  props: ["abstractNote", "extra"],
  data() {
    return {
      moreToggle: true,
      prerender: function(pr) {
        return pr.replace(/(\r\n\t|\n|\r\t)/gm,"");
      }
    };
  }
};
</script>