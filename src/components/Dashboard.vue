<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-3">
        <div class="col-9">
          <h3>Filter Settings</h3>
          <form
            v-on:submit.prevent="startRequest"
            class="d-flex justify-content-between needs-validation"
            novalidate
          >
            <div class="form-row align-items-center">
              <div class="col-sm-4 my-1">
                <div class="form-group">
                  <label for="groupID">Group ID</label>
                  <input
                    required
                    v-model="groupID"
                    type="text"
                    class="form-control"
                    placeholder="Top Level Group ID"
                    id="groupID"
                  />
                </div>
              </div>
              <div class="col-sm-4 my-1">
                <label for="collectionKey">Collection Key</label>
                <input
                  v-model="collectionKey"
                  type="text"
                  class="form-control"
                  id="collectionKey"
                  placeholder="Collection Key"
                />
              </div>

              <div class="col-md-1 my-1">
                <button class="btn btn-primary" type="submit">Go!</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9">
          <Collection :groupID="groupID" :zoteroReady="zoteroReady" :collectionKey="collectionKey" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from "@/components/Collection.vue";

export default {
  name: "Dashboard",
  components: {
    Collection
  },
  data() {
    return {
      groupID: 2350037,
      zoteroReady: false,
      collectionKey: undefined
    };
  },
  methods: {
    startRequest: function() {
      this.zoteroReady = !this.zoteroReady;
    }
  }
};
</script>
