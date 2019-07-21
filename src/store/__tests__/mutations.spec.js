import mutations from "../mutations"

describe("mutations", () => {
  test("SET_LOADING_STATUS sets state.loading_status to status", () => {
    const status = "loading";
    const state = {
      loading_status: "fresh"
    };
    mutations.SET_LOADING_STATUS(state, { status });
    expect(state.loading_status).toBe(status);
  });
});
