import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  search_done: false,
  submitted: false,
  groupID: null,
  list_collections: false,
  collections: [],
  create: false,
  loading_status: "fresh",
  zotero_items: [],
  raw_items: [],
  raw_collections: [],
  response: null,
  collectionKey: null,
  meta_data: {
    groupURL: "",
    library: ""
  },
  error: "",
  hypothesis_group: ""
};

export default {
  state,
  getters,
  actions,
  mutations
};
