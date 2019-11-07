<template>
  <div>
    <a :title="$t('annotations.hypothesis.tooltip')" target="_blank" :href="('https://hypothes.is/search?q=url%3A' + url)">
      <img class="service-icon" src="@/assets/img/hypothesis-icon.png" alt="Icon Hypothesis" />
    </a>
  </div>
</template>

<script>
export default {
    name: "DashboardLink",
    props: ["url"]
}
</script>
