export default {
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
  },
  SET_CREATE(state, status) {
    state.create = status;
  },
  SET_GROUPID(state, id) {
    state.groupID = id;
  }
};
