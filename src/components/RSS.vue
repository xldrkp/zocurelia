<template>
  <div>
    <a :title="$t('rss.tooltip')" target="_blank" :href="feed">
      <img class="service-icon" src="@/assets/img/rss.png" alt="RSS icon" />
    </a>
  </div>
</template>

<script>
export default {
  name: "RSS",
  props: ["url"],
  computed: {
    feed() {
      return "https://hypothes.is/stream.rss?uri=" + this.url;
    }
  }
};
</script>
