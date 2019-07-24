export default {
  loading_status: state => {
    return state.loading_status;
  },
  get_error: state => {
    return state.error;
  },
  get_create: state => {
    return state.create;
  },
  groupID: state => {
    return state.groupID;
  },
  list_collections: state => {
    return state.list_collections;
  },
  collections: state => {
    return state.collections;
  },
  raw_items: state => {
    return state.raw_items;
  },
  raw_collections: state => {
    return state.raw_collections;
  },
  zotero_items: state => {
    return state.zotero_items;
  },
  zotero_response: state => {
    return state.response;
  },
  collectionKey: state => {
    return state.collectionKey;
  },
  meta_data: state => {
    return state.meta_data;
  },
  submitted: state => {
    return state.submitted;
  },
  search_done: state => {
    return state.search_done;
  }
};
