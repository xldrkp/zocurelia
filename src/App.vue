<template>
  <div id="app">
    <HelloWorld msg="Linked Documents in Your Zotero Collection"/>
    <ol>
      <li v-for="u in urls" :key="u.idx">[{{ u.count }}] <a target="_blank" :href=u.url>{{ u.title }}</a> ({{ u.language }})</li>
    </ol>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import api from 'zotero-api-client'
import HypothesisClient from 'hypothesis-api-client'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      urls: [],
      anno_count: null,
      hac: Object,
      references_list: Object
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

            window.console.log(items)

            this.references_list = items.map( (i, idx) => (
              {
                language: i.language, 
                title: i.title, 
                url: i.url, 
                idx: idx
              }
            ))
            window.console.log("Liste: ", this.references_list)
            return this.references_list
          }
        ).then(
          references_list => {
            references_list.forEach( (ref, idx) => {
              if (this.url_exists(ref.url)) {
                this.hac.searchAnnotations({ url: ref.url }, (err, annotations) => {
                  window.console.log(annotations)
                  references_list[idx]["count"] = annotations.length
                })
              }
            return references_list
            })
          window.console.log("Liste fertig: ", references_list)
          this.urls = references_list
          }
        )
    },
    fetch_hypothesis_annotations() {
    },
    url_exists(item) {
      return item.url || false
    }
  },
  created() {
    // Instantiate the Hypothesis client
    this.hac = new HypothesisClient('')
    this.fetch_zotero_collection()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
