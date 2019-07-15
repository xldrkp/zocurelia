<template>
  <div class="py-3">
    <div class="container">

      <div class="row pb-3">
        <div class="col-md-12">
          <form class="form-inline">
            <div class="input-group">
              <input v-model="groupKey" type="text" class="form-control" placeholder="Top Level Group Key">
              <div class="input-group-append"><button @click="getCollection" class="btn btn-primary" type="button">Go!</button></div>
            </div>
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <Collection :groupKey=groupKey :zoteroReady=zoteroReady />
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
  },
  data() {
    return {
      groupKey: "",
      zoteroReady: false
    }
  },
  methods: {
    getCollection() {
      window.console.log(this.groupKey)
      this.zoteroReady = true
    }
  }
}



</script>
