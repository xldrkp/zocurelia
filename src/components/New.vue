<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-12">
          <div class="pt-3">
            <h3>Build Your Own Zocurelia Community</h3>
            <p>Get started with pasting the group ID of a Zotero list. Optionally, paste the key of a Zotero collection to show just a section of the list.</p>

            <form @submit.prevent="submit()" class="needs-validation">
              <div class="form-group row">
                <label class="control-label col-3 col-form-label" for="GroupID">
                  Public Zotero Group
                  <span class="req">*</span>
                </label>
                <div class="col-3 col-xs-5">
                  <input
                    id="GroupID"
                    type="text"
                    v-model="groupID"
                    class="form-control"
                    data-role="text"
                    required="required"
                    placeholder="Zotero group ID like 240012"
                    data-parsley-errors-container="#errId1"
                  />
                  <div class="invalid-feedback">Please provide a valid group ID.</div>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label control-label-left col-3"></label>
                <div class="controls col-9">
                  <label class="checkbox control-label col-form-label" for="list_collections">
                    <input
                      type="checkbox"
                      v-model="list_collections"
                      id="list_collections"
                      name="field27"
                      data-parsley-errors-container="#errId2"
                    /> List collections of the group
                  </label>
                  <span id="errId2" class="error"></span>
                </div>
              </div>
              <div v-show="list_collections" class="form-group row">
                <label class="control-label col-3" for="CollectionKey">Collection</label>
                <div class="controls col-9">
                  <input
                    id="CollectionKey"
                    name="CollectionKey"
                    type="text"
                    v-model="collectionKey"
                    class="form-control k-textbox"
                    data-role="text"
                    placeholder="Collection key like ETAGD5RT"
                    data-parsley-errors-container="#errId3"
                  />
                  <span id="errId3" class="error"></span>
                </div>
              </div>
              <!-- <div v-show="list_collections" class="form-group row">
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
              </div> -->
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


    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "New",
  components: {},
  data() {
    return {
      is_private_hypo: false,
      items: []
    };
  },
  methods: {
    initialize: function() {
      this.init(true);
    },
    set_submitted: function(status) {
      this.$store.commit("SET_SUBMITTED", status);
    },
    submit: function() {
      this.set_submitted(true);
      this.$router.push({
        path: "/list"
      });
    },
    ...mapActions(["create", "fetch_complete_zotero_list", "map_items", "init"])
  },
  computed: {
    ...mapGetters(["get_init", "loading_status", "search_done"]),
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
    },
    list_collections: {
      get: function() {
        return this.$store.getters.list_collections;
      },
      set: function(status) {
        this.$store.commit("SET_LIST_COLLECTION", status);
      }
    },
    collectionKey: {
      get: function() {
        return this.$store.getters.collectionKey;
      },
      set: function(key) {
        this.$store.commit("SET_COLLECTIONKEY", key);
      }
    }
  },
  beforeMount() {
    this.set_submitted(false);
    this.initialize();
  },
  created() {
    window.console.log("Inside New created()");
  }
};
</script>
