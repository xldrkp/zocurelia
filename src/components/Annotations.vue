<template>
    <div>
        <span class="badge badge-primary badge-pill" >{{ count }}</span>
    </div>
</template>

<script>

import HypothesisClient from 'hypothesis-api-client'

export default {
  name: 'Annotations',
  props: {
      item: Object
  },
  data() {
    return {
        count: Number,
        hac: Object
    }
  },
  methods: {
    url_exists(item) {
      window.console.log("URL: ", item.url)
      return item.url != "" || false
    },
    get_count: function() {
        window.console.log("Annotation Item", this.item)

        if (this.url_exists(this.item)) {
          return this.hac.searchAnnotations({ url: this.item.url }, (err, annotations) => {
            // window.console.log(annotations)
              this.count = annotations.length
            })
        } else {
            this.count = 0
        }
    }
  },
  created() {
    // Instantiate the Hypothesis client
    this.hac = new HypothesisClient('')
    this.get_count()
  }
}
</script>
