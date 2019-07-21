import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  groupID: null,
  create: false,
  loading_status: "fresh",
  zotero_items: [],
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