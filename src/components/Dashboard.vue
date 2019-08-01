<template>
  <div class="py-3">
    <div class="container">
      <div class="row pb-1 justify-content-center">
        <div class="col-12">
          <div class="mt-4" v-show="!get_create && loading_status =='fresh'">
            <div class="pt-3">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 text-center text-md-left">
                    <!-- first part -->
                    <h1>Enjoy Reading in Decentralized Communities</h1>
                    <p class="lead">
                      Reading for yourself can be fun. Doing it together and sharing different perspectives on texts in a group can make reading an even greater pleasure.
                      <br />
                      <em>Zocurelia</em> wants to help you organize reading together, especially when your community is spread all over the world, your school, your university or your city.
                    </p>
                  </div>
                  <div class="d-flex col-md-4 align-items-center justify-content-center" style>
                    <a
                      class="btn btn-primary btn-lg my-4"
                      href="http://localhost:8080/?groupID=2350037&list_collections=true"
                    >Check out an example!</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row pt-5">
                <div class="col-lg-6 col-md-12 text-center text-md-left">
                  <h1>Motivation and Idea</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 text-center text-md-left">
                  <p class="lead">
                    <b>Zotero</b> is great for collecting and distributing Open Access literature and Open Educational Ressources in a reading community. But as
                    <b>Zotero</b> reading lists and collections do not provide a kind of back channel, you usually need additional tools to track and share comments, annotations and discussions.
                  </p>
                </div>
                <div class="col-lg-6 col-md-12 text-center text-md-left">
                  <p class="lead">
                    Here,
                    <b>Hypothesis</b> comes in handy. All online media in your reading list can be annotated and discussed among community members with this smart browser tool.
                  </p>
                  <p class="lead">But how do you and your community track this activity on your reading list? Enter <em>Zocurelia</em>!</p>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row pt-5">
                <div class="col-md-12 text-center text-md-left">
                  <h1>Zocurelia Features</h1>
                  <p class="lead">
                    <em>Zocurelia</em> is short for
                    <b>Zo</b>tero
                    <b>cu</b>rated
                    <b>re</b>ading
                    <b>li</b>sts
                    <b>a</b>nnotated.
                    With a
                    <em>Zocurelia</em> list you can now show the
                    Hypothesis activity for each text on a Zotero list.
                    <em>Zocurelia</em> combines the features of
                    <b>Zotero</b> and
                    <b>Hypothesis</b> seamlessly with a flat learning curve.
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="py-3"> -->
            <!-- First row -->
            <div>
              <div class="row d-flex justify-content-between">
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features1.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Collect Collaboratively</b>
                  </h4>
                  <p>Choose texts for your curriculum and structure them in Zotero collections. Invite others to curate the list with you.</p>
                </div>
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features2.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Markdown</b>
                  </h4>
                  <p>Use Markdown to structure and enhance the abstract field in Zotero. Embed further links and questions for your community.</p>
                </div>
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features3.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Tags</b>
                  </h4>
                  <p>Make use of tags in Zotero and help your community to adjust their learning curve.</p>
                </div>
              </div>
              <!-- Second row -->
              <div class="row d-flex justify-content-between">
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features4.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Hypothesis</b>
                  </h4>
                  <p>Link from Zotero to Open Access versions of articles and books and thus show your community where the discussion takes place.</p>
                </div>
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features5.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Share Your List</b>
                  </h4>
                  <p>
                    Share a link to the Zocurelia list within your class or in social media.
                    <a
                      href="http://localhost:8080/?groupID=2350037&list_collections=true"
                    >Check out an example</a>.
                  </p>
                </div>
                <div class="col-md-4 col-lg-3 p-4">
                  <img
                    class="img-fluid d-block img-feature"
                    src="@/assets/img/features6.png"
                    width="1500"
                  />
                  <h4 class="my-3">
                    <b>Annotation Activity</b>
                  </h4>
                  <p>Show your community's activity directly in your reading list and thus motivate others to participate.</p>
                </div>
              </div>
            </div>
            <hr />
            <!-- blog post -->
            <div class="py-5 text-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 mx-auto">
                    <p
                      class="mb-3"
                    >Want to read more on the motivation and idea behind Zocurelia and how you could use it?</p>
                    <a class="btn btn-primary" href="#">Read a Blog Post</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-3" v-show="get_create">
            <h3>Filter Settings</h3>
            <p>Get started with pasting the group ID of a Zotero list. Optionally, paste the key of a Zotero collection to show just a section of the list.</p>

            <form v-on:submit.prevent="startRequest" class="needs-validation">
              <div class="form-group row">
                <label class="control-label col-3 col-form-label" for="GroupID">
                  Zotero Group
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
              <div v-show="list_collections" class="form-group row">
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
                    :submit="set_submitted(true)"
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
          <div class="col-lg-8 col-md-12">
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
              v-if="search_done"
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
      is_private_hypo: false,
      items: []
    };
  },
  methods: {
    startRequest: function() {
      window.console.log("Started request...");
      if (this.list_collections) {
        this.$store
          .dispatch(
            "fetch_top_level_collections",
            this.groupID,
            this.collectionKey
          )
          .then(() => {
            this.$store.commit("SET_SEARCH_DONE", true);
          });
      } else {
        // window.console.log("Fetching group items...");
        this.fetch_complete_zotero_list().then(response => {
          this.map_items(response).then(response => {
            this.items = response;
            window.console.log("Meta: ", this.items[0]);
            this.$store.commit("SET_LOADING_STATUS", "done");
            this.$store.commit("SET_CREATE", false);
            this.$store.commit("SET_SEARCH_DONE", true);
          });
        });
      }
    },
    set_create: function() {
      this.create(true);
    },
    set_submitted: function(status) {
      this.$store.commit("SET_SUBMITTED", status);
    },
    ...mapActions(["create", "fetch_complete_zotero_list", "map_items"])
  },
  computed: {
    ...mapGetters(["get_create", "loading_status", "search_done"]),
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
    submitted: {
      get: function() {
        return this.$store.getters.submitted;
      }
    }
  },
  created() {
    window.console.log("Inside Dashboard created()");
    // Immediately start a search when groupID has been set
    // with the URL parameter
    if (this.groupID != null) {
      this.startRequest();
    }
  }
};
</script>
