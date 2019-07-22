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
  list_collection: state => {
    return state.list_collection;
  },
  get_collections: state => {
    return state.collections;
  }
};
