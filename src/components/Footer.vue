<template>
  <div id="footer" class="container py-2 fixed-bottom">
    <cookie-law :buttonLinkText="$t('cookiewarning.buttonLinkText')" buttonLink="privacy" :message="$t('cookiewarning.message')" :buttonText="$t('cookiewarning.buttonText')" theme="blood-orange"></cookie-law>
    <div class="row">
      <div class="col-md-12 text-center">
        <p class="mb-0">
          <router-link :to="$i18nRoute({ name: 'gitlab' })" replace>{{ $t('footer.gitlab') }}</router-link> | © 2019 Axel Dürkop | 
          <router-link :to="$i18nRoute({ name: 'imprint' })" replace>{{ $t('footer.imprint') }}</router-link> |
          <router-link :to="$i18nRoute({ name: 'privacy' })" replace>{{ $t('footer.privacy') }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>



<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>