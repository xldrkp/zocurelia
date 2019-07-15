<template>
  <div class="card">
    <div class="card-header">Name der Sammlung</div>
    <div class="card-body p-0">
      <ul class="list-group border-0">
        <li v-for="i in items" :key="i.idx" class="list-group-item d-flex justify-content-between align-items-center border-left-0 border-right-0 border-top-0"><a target="_blank" :href=i.url>{{ i.title }}</a><Annotations :item=i /></li>
      </ul>
    </div>
  </div>
</template>

<script>

import Annotations from '@/components/Annotations.vue'
import api from 'zotero-api-client'

export default {
  name: 'Collection',
  components: {
    Annotations
  },
  props: {},
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetch_zotero_collection() {
      api().library('group', 2038099)
        .collections('UNZ8JH5G')
        .items()
        .top()
        .get( {"limit": 100, "sort": "title"} )
        .then(
          response => {
            let items = response.getData();
            window.console.log("Items: ", items)
            this.items = items.map( (i, idx) => (
                {
                  collection: i.collections[0],
                  language: i.language, 
                  title: i.title, 
                  url: i.url, 
                  idx: idx
                }
              ))
          })
    }
  },
  created() {
    this.fetch_zotero_collection()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
