<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-12">
          <div class="pt-3">
            <Back />
            <h1>{{ $t('new.headline') }}</h1>
            <p
              class="lead"
            >{{ $t('new.subline') }}</p>

            <form @submit.prevent="submit()" class="needs-validation">
              <div class="form-group row">
                <label class="control-label col-3 col-form-label" for="GroupID">
                  {{ $t('new.form.public') }}
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
                    /> {{ $t('new.form.listcollections') }}
                  </label>
                  <span id="errId2" class="error"></span>
                </div>
              </div>
              <div v-show="list_collections" class="form-group row">
                <label class="control-label col-3" for="CollectionKey">{{ $t('new.form.collection') }}</label>
                <div class="controls col-3">
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
              </div>-->
              <div class="form-group row">
                <label class="control-label col-3">{{ $t('new.form.hypothesis') }}</label>
                <div class="controls col-3">
                  <label class="checkbox control-label" for="checkbox49">
                    <input
                      type="checkbox"
                      value="Private Group"
                      v-model="is_private_hypo"
                      id="checkbox49"
                      name="field48"
                      data-parsley-errors-container="#errId5"
                    /> {{ $t('new.form.private') }}
                  </label>
                  <span id="errId5" class="error"></span>
                </div>
              </div>
              <div v-show="is_private_hypo" class="form-group row">
                <label class="control-label col-3" for="Group">{{ $t('new.form.group') }}</label>
                <div class="controls col-3">
                  <input
                    id="Group"
                    v-model="hypothesis_group"
                    type="text"
                    class="form-control k-textbox"
                    data-role="text"
                    :required="is_private_hypo"
                    placeholder="Enter a valid group ID like aYZTZ2Ge9"
                    data-parsley-errors-container="#errId7"
                  />
                  <span id="errId7" class="error"></span>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-3"></label>
                <div class="d-flex justify-content-start controls col-9">
                  <button
                    id="button58"
                    type="submit"
                    class="btn btn-primary btn-default"
                  >Get me my list!</button>
                  <button
                    id="button58"
                    type="button"
                    class="btn btn-info btn-default ml-2"
                    @click="reset()"
                  >Reset</button>
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
import Back from "@/components/Back";

export default {
  name: "New",
  components: {
    Back
  },
  data() {
    return {
      is_private_hypo: false,
      items: []
    };
  },
  methods: {
    reset: function() {
      this.reset_form();
      this.is_private_hypo = false;
    },
    initialize: function() {
      this.init(true);
    },
    set_submitted: function(status) {
      this.$store.commit("SET_SUBMITTED", status);
    },
    submit: function() {
      this.set_submitted(true);
      window.console.log(this.$i18nRoute);
      this.$router.push(
        this.$i18nRoute({
          name: "list"
        })
      );
    },
    ...mapActions([
      "create",
      "fetch_complete_zotero_list",
      "map_items",
      "init",
      "reset_form"
    ])
  },
  computed: {
    ...mapGetters([
      "get_init",
      "loading_status",
      "search_done",
      "hypothesis_group"
    ]),
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
    },
    hypothesis_group: {
      get: function() {
        return this.$store.getters.hypothesis_group;
      },
      set: function(group) {
        this.$store.commit("SET_HYPOTHESIS_GROUP", group);
      }
    }
  },
  beforeMount() {
    this.set_submitted(false);
    this.initialize();
  },
  created() {
    window.console.log("Inside New created()");
    if (this.$store.getters.hypothesis_group != "") {
      this.is_private_hypo = true;
    }
  }
};
</script>
