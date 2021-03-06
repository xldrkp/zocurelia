import api from "zotero-api-client";

export default {
  set_groupID(context, id) {
    context.commit("SET_GROUPID", id);
  },
  set_list_collections(context, status) {
    context.commit("SET_LIST_COLLECTION", status);
  },
  init(context, status) {
    // Clears all filter setting before applying new settings
    context.dispatch("clear_filter");
    context.commit("SET_INIT", status);
  },
  reset_form(context) {
    context.commit("SET_GROUPID", null);
    context.commit("SET_LIST_COLLECTION", false);
    context.commit("SET_COLLECTIONKEY", null);
    context.commit("SET_HYPOTHESIS_GROUP", "");
  },
  clear_filter(context) {
    window.console.log("Clearing filter...");
    context.commit("SET_SUBMITTED", false);
    context.commit("SET_COLLECTIONS", []);
    context.commit("SET_LOADING_STATUS", "fresh");
    context.commit("SET_SEARCH_DONE", false);
    // @TODO Remove ID for production
    // context.commit("SET_GROUPID", 2350037);
    // @TODO Remove key for production
    // context.commit("SET_COLLECTIONKEY", "PLCUTVQN");
  },
  map_collections(context) {
    // Map the name etc. of collections
    let raw_collections = context.getters.raw_collections;
    let mapped_collections = raw_collections.map(c => ({
      name: c.name,
      key: c.key
    }));
    window.console.log("Mapped collections: ", mapped_collections);
    context.commit("SET_COLLECTIONS", mapped_collections);
    context.commit("SET_LOADING_STATUS", "done");
  },
  map_items(context, raw_response) {
    // Get the relevant information for the UI and map it
    // accordingly
    let data = raw_response.getData();
    let raw = raw_response.raw;

    let mapped_items = data.map((i, idx) => ({
      library: raw[0].library.name || "No name",
      groupURL: "https://www.zotero.org/groups/" + context.getters.groupID,
      language: i.language,
      title: i.title,
      authors: i.creators,
      pub_date: i.date,
      abstractNote: i.abstractNote,
      url: i.url,
      zotero_item_url:
        raw[idx].library.links.alternate.href + "/items/itemkey/" + i.key,
      tags: i.tags,
      idx: idx,
      extra: i.extra
    }));
    return mapped_items;
  },
  fetch_top_level_collections(context) {
    // Test if collections on top level exist and fetch them
    window.console.log("Inside Fetch Top Level");

    let groupID = context.getters.groupID;

    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_INIT", false);
    return api()
      .library("group", groupID)
      .collections()
      .top()
      .get({ limit: 100, sort: "title" })
      .then(response => {
        // return response;
        // Store the raw response
        // Some meta information is needed later
        window.console.log("Raw response: ", response);
        context.commit("SET_RESPONSE", response);

        let raw_collections = response.getData();
        window.console.log("Raw collections length: ", raw_collections.length);

        // Test if items exisit or if group has not items at all
        if (raw_collections.length == 0) {
          // @TODO Was ist, wenn es keine Einträge in der Gruppe gibt?
          window.console.error("No collections in this group!");
        } else {
          // If items exist save them
          window.console.log("Group collections: ", raw_collections);
          context.commit("SET_RAW_COLLECTIONS", raw_collections);

          context.dispatch("map_collections");
          // context.dispatch("map_meta_data");

          // Indicate that loading is done
          context.commit("SET_LOADING_STATUS", "done");
        }
      });
  },
  fetch_complete_zotero_list(context, limit = 100) {
    window.console.log("Inside fetch_complete_zotero_list...");
    // Fetch complete item list in library
    let groupID = context.getters.groupID;

    context.commit("SET_LOADING_STATUS", "loading");

    return api()
      .library("group", groupID)
      .items()
      .top()
      .get({ limit: limit, sort: "title" })
      .then(response => {
        context.commit("SET_LOADING_STATUS", "done");
        return response;
      });
  },
  fetch_multiple_collections(context, collectionKey, recursive = false) {
    // Test if certain collection exists and get
    // If recursive is set, also fetch subcollections down one level
    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_INIT", false);

    if (recursive);

    let groupID = context.getters.groupID;

    api()
      .library("group", groupID)
      .collections(collectionKey)
      .collections()
      .get()
      .then(response => {
        let collections = response.getData();
        window.console.log("List of collections: ", collections);
        context.commit("SET_COLLECTIONS", collections);
        context.commit("SET_LOADING_STATUS", "done");
      });
  },
  fetch_single_collection(context, collectionKey, limit = 100) {
    window.console.log("Inside fetch_single_collection...");
    // Test if certain collection exists and get
    context.commit("SET_LOADING_STATUS", "loading");

    let groupID = context.getters.groupID;

    return api()
      .library("group", groupID)
      .collections(collectionKey)
      .items()
      .top()
      .get({ limit: limit, sort: "title" })
      .then(response => {
        context.commit("SET_LOADING_STATUS", "done");
        return response;
      });
  },
  fetch_group_data(context) {
    let groupID = context.getters.groupID;

    return api()
      .library("group", groupID)
      .get()
      .then(response => {
        return response;
      });
  }
};
