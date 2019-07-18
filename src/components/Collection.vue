<template>
  <div>
    <h1 v-show="this.meta.groupURL != ''">Zotero Group: <a :href="( this.meta.groupURL || '#')" target="_blank">{{ this.meta.library }}</a> ({{ this.items.length }} texts)</h1>
    <div class="card" v-for="i in items" :key="i.idx">
      <div class="card-header">
        <Annotations v-if="i.url" class="float-right" :item=i />
        <span v-else class="float-right">No online full text</span>
        <a class="title" v-if="i.url" target="_blank" :href=i.url>{{ i.title }}</a>
        <span class="title" v-else>{{ i.title }}</span>
        <Authors :authors=i.authors :zotero_item_url=i.zotero_item_url />
      </div>
      <div class="card-body" >
        <AbstractNote :abstractNote=i.abstractNote />
        <Tags :tags=i.tags />
     </div>
    </div>
  </div>
</template>

<script>

import AbstractNote from '@/components/AbstractNote.vue'
import Annotations from '@/components/Annotations.vue'
import Tags from '@/components/Tags.vue'
import Authors from '@/components/Authors.vue'
import api from 'zotero-api-client'

export default {
  name: 'Collection',
  components: {
    Annotations,
    AbstractNote,
    Tags,
    Authors
  },
  props: [ 'groupID', 'zoteroReady', 'subcollections', 'collectionKey', 'tags' ],
  data() {
    return {
      items: [],
      meta: {
        groupURL: "",
        library: ""
      }
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
                  authors: i.creators,
                  abstractNote: i.abstractNote,
                  url: i.url, 
                  idx: idx
                }
              ))
            this.meta = {
              library: response.raw[0].library.name || "No name",
              groupURL: response.raw[0].links.alternate.href || "No URL"
            }
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
            window.console.log("Raw response: ", response)
            window.console.log("Group Items: ", items)
            this.items = items.map( (i, idx) => (
                {
                  collection: i.collections[0],
                  language: i.language, 
                  title: i.title,
                  authors: i.creators,
                  abstractNote: i.abstractNote,
                  url: i.url, 
                  zotero_item_url: response.raw[idx].links.alternate.href,
                  tags: i.tags, 
                  idx: idx
                }
              ))
            this.meta = {
              library: response.raw[0].library.name || "No name",
              groupURL: "https://www.zotero.org/groups/" + this.groupID
            }
            window.console.log("Meta: ", this.meta)
            window.console.log("Mapped items: ", this.items)
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
