import api from "zotero-api-client";

export default {
  set_groupID(context, id) {
    context.commit("SET_GROUPID", id);
  },
  create(context, status) {
    // Clears all filter setting before applying new settings
    context.dispatch("clear_filter");
    context.commit("SET_CREATE", status);
  },
  clear_filter(context) {
    context.commit("SET_COLLECTIONS", []);
    context.commit("SET_LIST_COLLECTION", false);
    context.commit("SET_SUBMITTED", false);
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
  map_items(context, data) {
    // Get the relevant information for the UI and map it
    // accordingly
    let mapped_items = data.map((i, idx) => ({
      language: i.language,
      title: i.title,
      authors: i.creators,
      abstractNote: i.abstractNote,
      url: i.url,
      zotero_item_url:
        context.getters.zotero_response.raw[idx].links.alternate.href,
      tags: i.tags,
      idx: idx
    }));
    return mapped_items;
  },
  // map_items(context) {
  //   // Get the relevant information for the UI and map it
  //   // accordingly
  //   let raw_items = context.getters.raw_items;
  //   let mapped_items = raw_items.map((i, idx) => ({
  //     language: i.language,
  //     title: i.title,
  //     authors: i.creators,
  //     abstractNote: i.abstractNote,
  //     url: i.url,
  //     zotero_item_url:
  //       context.getters.zotero_response.raw[idx].links.alternate.href,
  //     tags: i.tags,
  //     idx: idx
  //   }));
  //   window.console.log("Mapped items: ", mapped_items);
  //   context.commit("SET_ZOTERO_ITEMS", mapped_items);
  //   return mapped_items;
  // },
  map_meta_data(context) {
    // Map information like URLs, headline, title etc.
    let meta = {
      library: context.getters.zotero_response.raw[0].library.name || "No name",
      groupURL: "https://www.zotero.org/groups/" + context.getters.groupID
    };
    window.console.log("Meta: ", meta);
    context.commit("SET_META_DATA", meta);
  },
  fetch_top_level_collections(context) {
    // Test if collections on top level exist and fetch them
    window.console.log("Inside Fetch Top Level");

    let groupID = context.getters.groupID;

    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_CREATE", false);
    api()
      .library("group", groupID)
      .collections()
      .top()
      .get({ limit: 100, sort: "title" })
      .then(response => {
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
    // .catch(err => {
    //   window.console.error(err.response.status);
    //   if (err.response.status != 200) {
    //     context.commit("SET_ERROR", err.response.status);
    //     context.commit("SET_LOADING_STATUS", "error");
    //   }
    // });
  },
  fetch_complete_zotero_list(context) {
    // Fetch complete item list in library
    let groupID = context.getters.groupID;
    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_CREATE", false);
    api()
      .library("group", groupID)
      .items()
      .top()
      .get({ limit: 100, sort: "title" })
      .then(response => {
        // Store the raw response
        // Some meta information is needed later
        window.console.log("Raw response: ", response);
        context.commit("SET_RESPONSE", response);

        let raw_items = response.getData();
        window.console.log("Raw items length: ", raw_items.length);

        // Test if items exisit or if group has not items at all
        if (raw_items.length == 0) {
          // @TODO Was ist, wenn es keine Einträge in der Gruppe gibt?
          window.console.error("No items in this group!");
        } else {
          // If items exist save them
          window.console.log("Group Items: ", raw_items);
          context.commit("SET_RAW_ITEMS", raw_items);

          context.dispatch("map_items");
          context.dispatch("map_meta_data");

          // Indicate that loading is done
          context.commit("SET_LOADING_STATUS", "done");
        }
      });
    // .catch(err => {
    //   window.console.error(err.response.status);
    //   if (err.response.status != 200) {
    //     context.commit("SET_ERROR", err.response.status);
    //     context.commit("SET_LOADING_STATUS", "error");
    //   }
    // });
  },
  fetch_multiple_collections(context, collectionKey, recursive = false) {
    // Test if certain collection exists and get
    // If recursive is set, also fetch subcollections down one level
    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_CREATE", false);

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
  fetch_single_collection(context, collectionKey) {
    context.commit("SET_LOADING_STATUS", "loading");
    context.commit("SET_CREATE", false);

    let groupID = context.getters.groupID;

    return api()
      .library("group", groupID)
      .collections(collectionKey)
      .items()
      .top()
      .get({ limit: 100, sort: "title" })
      .then(response => {
        return response;
        // Store the raw response
        // Some meta information is needed later
        window.console.log("Raw response: ", response);
        context.commit("SET_RESPONSE", response);

        let raw_items = response.getData();
        window.console.log("Raw items length: ", raw_items.length);

        // Test if items exisit or if group has not items at all
        if (raw_items.length == 0) {
          // @TODO Was ist, wenn es keine Einträge in der Gruppe gibt?
          window.console.error("No items in this group!");
        } else {
          // If items exist save them
          window.console.log("Group Items: ", raw_items);
          context.commit("SET_RAW_ITEMS", raw_items);

          // Indicate that loading is done
          context.commit("SET_LOADING_STATUS", "done");

          context.dispatch("map_meta_data");
          return context.dispatch("map_items");
        }
      });
    // .catch(err => {
    //   window.console.error(err.response.status);
    //   if (err.response.status != 200) {
    //     context.commit("SET_ERROR", err.response.status);
    //     context.commit("SET_LOADING_STATUS", "error");
    //   }
    // });
  }
};
