<template>
  <span class="hypothesis-group">
    <img class="hypo-icon" src="@/assets/img/hypothesis-icon.png" alt="Icon Hypothesis">
    {{(hypothesis_group != '' ? hypothesis_group_name : 'Public')}}
  </span>
</template>

<script>
import HypothesisClient from "hypothesis-api-client";

export default {
  name: "HypothesisGroup",
  props: ["hypothesis_group", "url"],
  data() {
    return {
      hypothesis_group_name: ""
    };
  },
  asyncComputed: {
    fetch_hypothesis_group_name: {
      async get() {
        let token = localStorage.getItem("hypothesis_token") || null;
        this.hac = new HypothesisClient(token);
        await this.hac.getListOfGroups(
          { document_uri: this.url },
          (err, groups) => {
            window.console.log("Hypothesis Groups: ", groups);

            if (this.hypothesis_group != "") {
              for (let i = 0; i < groups.length; i++) {
                window.console.log("Hyp Group Name: ", groups[i].name);
                window.console.log("Hyp Group ID: ", groups[i].id);
                if (groups[i].id == this.hypothesis_group) {
                  window.console.log("Found Hyp Group: ", groups[i].name);
                  this.hypothesis_group_name = groups[i].name;
                }
              }
            }
          }
        );
      }
    }
  }
};
</script>
