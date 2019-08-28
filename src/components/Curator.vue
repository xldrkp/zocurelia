<template>
  <div class="curator" v-show="curator_parsed != ''">
    <h6 v-if="curator_link_parsed == ''">{{ $t('curator.curated_by') }} {{ curator_parsed }}</h6>
    <h6 v-if="curator_link_parsed != ''">
      {{ $t('curator.curated_by') }}
      <a :href="curator_link_parsed" target="_blank">{{ curator_parsed }}</a>
    </h6>
  </div>
</template>


<script>
export default {
  name: "Curator",
  props: ["extra"],
  computed: {
    curator_parsed: function() {
      if (this.extra.indexOf("Curator") != -1) {
        const regex = /Curator: ?(.+)\|\| ?(.+)/gm;
        const str = this.extra;
        let m;
        m = regex.exec(str);

        window.console.log("Curator: ", m);

        return `${m[2]}` + " " + `${m[1]}`;
      } else {
        return "";
      }
    },
    curator_link_parsed: function() {
      if (this.extra.indexOf("Curator Link") != -1) {
        const regex = /Curator Link: ((http|https):\/\/.+)/gm;
        const str = this.extra;
        let m;
        m = regex.exec(str);

        window.console.log("Curator Link:", m);

        return m[1];
      } else {
        return "";
      }
    }
  }
};
</script>
