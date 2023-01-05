import { mount,shallowMount } from "@vue/test-utils";
import Menu from "@/components/Menu.vue";
import { expect, it } from "vitest";
import sinon from "sinon";

describe("Menu component test", () => {
  it("Emitted update model", async () => {
    const wrapper = mount(Menu);
    wrapper.vm.$emit("update:modelValue", "test");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });
  it("Life cycle hook mounted", async () => {
    const spy = sinon.spy(Menu., "mounted");
    const wrapper = mount(Menu);
    expect(spy).toHaveBeenCalled();
  });
});
