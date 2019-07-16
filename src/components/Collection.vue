<template>
  <div>
    <h2>{{ this.collectionKey }} ({{ this.items.length }})</h2>
    <div class="card" v-for="i in items" :key="i.idx">
      <div class="card-header"><a target="_blank" :href=i.url>{{ i.title }}</a><Annotations  class="float-right" :item=i /></div>
        <div class="card-body" >
          <p>{{ i.abstractNote }}</p>
      </div>
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
  props: [ 'groupID', 'zoteroReady', 'subcollections', 'collectionKey' ],
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetch_zotero_collection() {
      api().library('group', this.groupID)
        .collections(this.collectionKey)
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
                  abstractNote: i.abstractNote,
                  url: i.url, 
                  idx: idx
                }
              ))
          })
    },
    fetch_complete_zotero_list() {
        api().library('group', this.groupID)
        .items()
        .top()
        .get( {"limit": 100, "sort": "title"} )
        .then(
          response => {
            let items = response.getData();
            window.console.log("Group Items: ", items)
            this.items = items.map( (i, idx) => (
                {
                  collection: i.collections[0],
                  language: i.language, 
                  title: i.title,
                  abstractNote: i.abstractNote,
                  url: i.url, 
                  idx: idx
                }
              ))
          })
      }
  },
  watch: {
    zoteroReady: function() {
        // this.fetch_zotero_collection()
        if (this.collectionKey) {
          window.console.log("Got a collection key!")
          this.fetch_zotero_collection()
        } else {
          window.console.log("No collection key!")
          this.fetch_complete_zotero_list()
        }
    }
  },
  created() {
    // window.console.log(this.zoteroReady())
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
