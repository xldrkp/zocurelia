import { shallowMount } from "@vue/test-utils";
import About from "../About.vue";
describe("About.vue", () => {
  test('render "About"', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.vm.$el.textContent).toContain("Sint amet");
  });
});
