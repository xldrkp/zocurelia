export default {
  SET_LOADING_STATUS(state, status) {
    state.loading_status = status;
  },
  SET_RESPONSE(state, data) {
    state.response = data;
  },
  SET_RAW_ITEMS(state, items) {
    state.raw_items = items;
  },
  SET_RAW_COLLECTIONS(state, items) {
    state.raw_collections = items;
  },
  SET_ZOTERO_ITEMS(state, items) {
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
  },
  SET_LIST_COLLECTION(state, flag) {
    state.list_collections = flag;
  },
  SET_COLLECTIONS(state, collections) {
    state.collections = collections;
  },
  SET_COLLECTIONKEY(state, key) {
    state.collectionKey = key;
  },
  SET_SUBMITTED(state, status) {
    state.submitted = status;
  }
};
