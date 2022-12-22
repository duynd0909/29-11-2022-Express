import {mount} from "@vue/test-utils";
import Headline from "../components/Headline.vue"
import { expect, test } from "vitest";
test("mount component",async()=>{
   expect(Headline).toBeTruthy();
   const wrapper = mount(Headline,{
       props:{
         headline:"aabc",
         subHeadline:"áB"
       },
   });
   expect(wrapper.element).toMatchSnapshot()
  })
