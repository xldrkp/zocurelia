<template>
  <div>{{ curator_parsed }}</div>
</template>


<script>
export default {
  name: "Curator",
  props: ["curator"],
  computed: {
    curator_parsed: function() {
      if (this.curator.indexOf("Curator") != -1) {
        const regex = /Curator: ?(.+)\|\| ?(.+)/gm;
        const str = this.curator;
        let m;
        let result;
        let parts = [];
        while ((m = regex.exec(str)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex++;
          }

          window.console.log("M: ", typeof m);

          // The result can be accessed through the `m`-variable.
          result = m.forEach((match, groupIndex) => {
            parts.push(match);
            window.console.log(`Found match, group ${groupIndex}: ${match}`);
            return parts;
          });
        }

        let fullName;

        fullName = result.join(", ");

        window.console.log("Full name: ", fullName);
        return fullName;
      } else {
        return "";
      }
    }
  }
};
</script>
