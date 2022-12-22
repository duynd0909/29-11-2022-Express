<template>
  <div class="career-path" :id="MENU_CODE.CODE_EXPERIENCES">
    <div class="career-path__container">
      <div class="career-path__job-list">
        <headline :headline="`career path`" :sub-healine="`Work Experices`" />
        <CustomMenu v-model="selectedKey" :menuList="menuList"></CustomMenu>
      </div>
      <div class="career-path__job-detail">
        <job-detail :job-detail="jobDetail"></job-detail>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {reactive, ref, watch } from "vue";
import Headline from "@/components/Headline.vue";
import CustomMenu from "@/components/Menu.vue";
import JobDetail from "@/components/JobDetail.vue";

import type JobDetailInterface from "@/types/JobDetail";
import type Menu from "@/types/Menu";

import { MENU_CODE } from "@/components/MenuConstants";

const menuList = reactive<Array<Menu>>([
  {
    key: "1",
    title: "Apple",
  },
  {
    key: "2",
    title: "Google",
  },
]);
const selectedKey = ref("");
watch(selectedKey, (currentValue, oldValue) => {
  console.log(currentValue, "currentValue");
  console.log(oldValue, "oldValue");
});

const jobDetail = reactive<JobDetailInterface>({
  id: 1,
  title: "Apple",
  company: "Apple .Inc",
  detailTitle: "Front-end Developer",
  location: "California, United States",
  description: ["Improving overall website performance for mobile users."],
  technologies: ["Swift", "Go"],
  timeline: "Nov 2020 - Present · Full-time",
});
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
  &__job-detail {
    flex: auto;
  }
}
</style>
