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
  }
};
