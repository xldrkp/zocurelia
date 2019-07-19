import Vue from "vue";
import Vuex from "vuex";

import api from "zotero-api-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading_status: "fresh",
    zotero_items: [],
    meta_data: {
      groupURL: "",
      library: ""
    },
    error: ""
  },
  getters: {
    loading_status: state => {
      return state.loading_status;
    },
    get_error: state => {
      return state.error;
    }
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loading_status = status;
    },
    SET_ZOTERO_LIST(state, items) {
      state.zotero_items = items;
    },
    SET_META_DATA(state, meta) {
      state.meta_data = meta;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    fetch_complete_zotero_list(context, groupID) {
      context.commit("SET_LOADING_STATUS", "loading");
      api()
        .library("group", groupID)
        .items()
        .top()
        .get({ limit: 100, sort: "title" })
        .then(response => {
          let items = response.getData();
          window.console.log("Raw response: ", response);
          window.console.log("Group Items: ", items);
          let mapped_items = items.map((i, idx) => ({
            collection: i.collections[0],
            language: i.language,
            title: i.title,
            authors: i.creators,
            abstractNote: i.abstractNote,
            url: i.url,
            zotero_item_url: response.raw[idx].links.alternate.href,
            tags: i.tags,
            idx: idx
          }));
          let meta = {
            library: response.raw[0].library.name || "No name",
            groupURL: "https://www.zotero.org/groups/" + groupID
          };
          window.console.log("Meta: ", meta);
          window.console.log("Mapped items: ", mapped_items);
          context.commit("SET_LOADING_STATUS", "done");
          context.commit("SET_ZOTERO_LIST", mapped_items);
          context.commit("SET_META_DATA", meta);
        })
        .catch(err => {
          window.console.error(err.response.status);
          if (err.response.status != 200) {
            context.commit("SET_ERROR", err.response.status)
            context.commit("SET_LOADING_STATUS", "error");
          }
        });
    },
    fetch_zotero_collection() {
      api()
        .library("group", this.groupID)
        .collections(this.collectionKey)
        .items()
        .top()
        .get({ limit: 100, sort: "title" })
        .then(response => {
          let items = response.getData();
          window.console.log("Items: ", items);
          this.items = items.map((i, idx) => ({
            collection: i.collections[0],
            language: i.language,
            title: i.title,
            authors: i.creators,
            abstractNote: i.abstractNote,
            url: i.url,
            idx: idx
          }));
          this.meta = {
            library: response.raw[0].library.name || "No name",
            groupURL: response.raw[0].links.alternate.href || "No URL"
          };
        });
    }
  }
});
