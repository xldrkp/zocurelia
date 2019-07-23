import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
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
  error: ""
};

export default {
  state,
  getters,
  actions,
  mutations
};
