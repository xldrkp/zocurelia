<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-3">
        <div class="col-9">
          <h3>Filter Settings</h3>

          <form v-on:submit.prevent="startRequest" class="needs-validation" novalidate>
            <div class="form-group row">
              <label class="control-label col-3 col-form-label" for="GroupID">
                Group ID
                <span class="req">*</span>
              </label>
              <div class="col-9">
                <input
                  id="GroupID"
                  type="text"
                  v-model="groupID"
                  class="form-control"
                  data-role="text"
                  required="required"
                  placeholder="Enter a Zotero group ID like 240012"
                  data-parsley-errors-container="#errId1"
                />
                <span id="errId1" class="error"></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label control-label-left col-3"></label>
              <div class="controls col-9">
                <label class="checkbox control-label col-form-label" for="list_collection">
                  <input
                    type="checkbox"
                    value="list_collection"
                    v-model="list_collection"
                    id="list_collection"
                    name="field27"
                    data-parsley-errors-container="#errId2"
                  /> List a collection in that group
                </label>
                <span id="errId2" class="error"></span>
              </div>
            </div>
            <div v-show="list_collection" class="form-group row">
              <label class="control-label col-3" for="CollectionKey">Collection Key</label>
              <div class="controls col-9">
                <input
                  id="CollectionKey"
                  name="CollectionKey"
                  type="text"
                  class="form-control k-textbox"
                  data-role="text"
                  placeholder="Enter a valid collection key like ETAGD5RT"
                  data-parsley-errors-container="#errId3"
                />
                <span id="errId3" class="error"></span>
              </div>
            </div>
            <div v-show="list_collection" class="form-group row">
              <label class="control-label control-label-left col-3"></label>
              <div class="controls col-9">
                <label class="checkbox control-label" for="list_sub">
                  <input
                    id="list_sub"
                    name="list_sub"
                    type="checkbox"
                    value="List all subcollections"
                    data-parsley-errors-container="#errId4"
                  /> List all subcollections
                </label>
                <span id="errId4" class="error"></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label col-3">Hypothesis</label>
              <div class="controls col-9">
                <label class="checkbox control-label" for="checkbox49">
                  <input
                    type="checkbox"
                    value="Private Group"
                    v-model="is_private_hypo"
                    id="checkbox49"
                    name="field48"
                    data-parsley-errors-container="#errId5"
                  />Private Group
                </label>
                <span id="errId5" class="error"></span>
              </div>
            </div>
            <div v-show="is_private_hypo" class="form-group row">
              <label class="control-label col-3" for="Token">Token</label>
              <div class="controls col-9">
                <input
                  id="Token"
                  type="text"
                  class="form-control k-textbox"
                  data-role="text"
                  placeholder="Enter a valid API token. You will find it at &quot;Account > Developer&quot;."
                  data-parsley-errors-container="#errId6"
                />
                <span id="errId6" class="error"></span>
              </div>
            </div>
            <div v-show="is_private_hypo" class="form-group row">
              <label class="control-label col-3" for="Group">Group</label>
              <div class="controls col-9">
                <input
                  id="Group"
                  type="text"
                  class="form-control k-textbox"
                  data-role="text"
                  placeholder="Enter a valid group ID like aYZTZ2Ge9"
                  data-parsley-errors-container="#errId7"
                />
                <span id="errId7" class="error"></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-3"></label>
              <div class="controls col-9">
                <button id="button58" type="submit" class="btn btn-primary btn-default">Go!</button>
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
      collectionKey: undefined,
      list_collection: false,
      is_private_hypo: false
    };
  },
  methods: {
    startRequest: function() {
      this.zoteroReady = !this.zoteroReady;
    }
  }
};
</script>
