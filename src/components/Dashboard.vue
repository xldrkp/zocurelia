<template>
  <div class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <Collection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Collection from '@/components/Collection.vue'

export default {
  name: 'Dashboard',
  components: {
    Collection
  }
}



</script>
