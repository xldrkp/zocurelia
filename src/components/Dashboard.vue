<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-8">
          <div class="mt-4 alert alert-primary" v-show="!get_create && loading_status =='fresh'">
            <h3>Get started with Zotero Reading Lists Annotated!</h3>
            <p>Zotero Reading Lists Annotated combine Zotero group libraries with the Hypothesis activity per text.</p>
            <p>You can create your own lists and share them among your colleagues or students.</p>
            <p>
              <a href="#" @click.prevent="create(true)">Create a new list</a> or have a look at an
              <a href="#">example</a>.
            </p>
          </div>

          <div v-show="get_create">
            <h3>Filter Settings</h3>

            <form v-on:submit.prevent="startRequest" class="needs-validation">
              <div class="form-group row">
                <label class="control-label col-3 col-form-label" for="GroupID">
                  Zotero Group
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
                  <div class="invalid-feedback">Please provide a valid group ID.</div>
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
                    /> List collections in that group
                  </label>
                  <span id="errId2" class="error"></span>
                </div>
              </div>
              <div v-show="list_collection" class="form-group row">
                <label class="control-label col-3" for="CollectionKey">Collection in Group</label>
                <div class="controls col-9">
                  <input
                    id="CollectionKey"
                    name="CollectionKey"
                    type="text"
                    class="form-control k-textbox"
                    data-role="text"
                    placeholder="Optional collection key like ETAGD5RT"
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
                <label class="control-label col-3">Hypothesis Settings</label>
                <div class="controls col-9">
                  <label class="checkbox control-label" for="checkbox49">
                    <input
                      type="checkbox"
                      value="Private Group"
                      v-model="is_private_hypo"
                      id="checkbox49"
                      name="field48"
                      data-parsley-errors-container="#errId5"
                    /> Private Group
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
                  <button
                    id="button58"
                    type="submit"
                    class="btn btn-primary btn-default"
                  >Get me my list!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="action-area">
        <div class="row justify-content-center">
          <div class="col-8">
            <div v-show="loading_status == 'loading'">
              <div class="col-md-12 d-flex justify-content-center">
                <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
              </div>
            </div>

            <div class="alert alert-danger" v-show="loading_status == 'error'">
              <h3>An error occured!</h3>
              <p class="error">{{ get_error }}</p>
            </div>

            <Result
              v-show="loading_status == 'done' && !get_create"
              :groupID="groupID"
              :collectionKey="collectionKey"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Result from "@/components/Result.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Result
  },
  data() {
    return {
      collectionKey: undefined,
      list_collection: false,
      is_private_hypo: false
    };
  },
  methods: {
    startRequest: function() {
      this.$store.dispatch("fetch_complete_zotero_list", this.groupID);
      // this.$store.dispatch("fetch_collections", "2038099", "FSEUQMKG");
    },
    set_create: function() {
      this.create(true);
    },
    ...mapActions(["create", "set_groupID"])
  },
  computed: {
    ...mapGetters(["get_create", "loading_status"]),
    loading_status() {
      let status = this.$store.getters.loading_status;
      window.console.log(status);
      return status;
    },
    get_error() {
      let error = this.$store.getters.get_error;
      window.console.log(error);
      return error;
    },
    groupID: {
      get: function() {
        return this.$store.getters.groupID;
      },
      set: function(groupID) {
        this.$store.commit("SET_GROUPID", groupID);
      }
    }
  },
  created() {
    if (this.groupID != null) {
      this.startRequest();
    }
  }
};
</script>
