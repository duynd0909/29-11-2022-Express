import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import { MENU_CODE } from "@/components/MenuConstants";
import { expect, it } from "vitest";
import sinon from 'sinon'

describe("Header Component Test", function () {
  it("Add new menu should render",async () => {
    const wrapper = mount(Header);
    const menuList =  wrapper.vm.menuList
    await  wrapper.setData({ menuList: [...menuList,{ name: "Test", code: "test" }] });    
    expect(wrapper.text()).toContain('Test')
  });
  it("Menu click",async () => {
    const spyDoScrolling = sinon.spy(Header.methods, 'doScrolling')
    const wrapper = mount(Header);
    const menuItems  =  wrapper.find('.menu-item')
    await menuItems.trigger('click')
    expect(spyDoScrolling.calledOnce).to.be.true
  });
});
