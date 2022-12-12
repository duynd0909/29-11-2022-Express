<template>
  <div class="career-path">
    <div class="career-path__container">
      <div class="career-path__job-list">
        <headline :headline="`career path`" :sub-healine="`Work Experices`" />
        <CustomMenu :menuList="menuList" ></CustomMenu>
      </div>
      <div class="career-path__job-detail"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType,reactive } from "vue";
import Headline from "@/components/Headline.vue";
import CustomMenu from "@/components/Menu.vue";
import type Menu from '@/types/Menu'
const menuList = reactive<Array<Menu>>([
  {
    key:"1",
    title:"Apple"
  },
  {
    key:"2",
    title:"Google"
  }
])
const props = defineProps({});
</script>
<script lang="ts"></script>
<style lang="scss" scoped>
.career-path {
  height: 610px;
  background-color: var(--light);
  &__container {
    padding: 105px 120px 110px 115px;
    display: flex;
    gap: 140px;
  }
  &__job-list {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
}
</style>
