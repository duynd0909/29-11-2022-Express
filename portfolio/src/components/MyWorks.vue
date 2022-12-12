<template>
  <div class="my-works" :id="MENU_CODE.CODE_PORTFOLIOS">
    <div class="my-works__container">
      <div class="my-works__heading">
        <headline :headline="`My Works`" :sub-healine="`Featured Portfolios`" />
        <div class="paging">
          <custom-button
            class="paging__left"
            :icon="`arrow-right`"
            size="small"
            shape="semi-circle"
            type="normal"
            :active="false"
          ></custom-button>
          <custom-button
            class="paging__right"
            :icon="`arrow-right`"
            size="small"
            shape="semi-circle"
            type="normal"
          ></custom-button>
        </div>
      </div>
      <div class="my-works__list">
        <work-item class="list-item" title="Agency Website."></work-item>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MENU_CODE } from "@/components/MenuConstants";
</script>
<script lang="ts">
import Headline from "@/components/Headline.vue";
import CustomButton from "@/components/Button.vue";
import WorkItem from "@/components/WorkItem.vue";

export default {
  components: {
    Headline,
    CustomButton,
    WorkItem,
  },
};
</script>
<style lang="scss" scoped>
.my-works {
  &__container {
    padding: 100px 120px 176px 120px;
  }
  &__heading {
    display: flex;
    align-items: center;
    .paging {
      display: flex;
      margin-left: auto;
      gap: 16px;
      &__left {
        @include rotate(180);
      }
    }
  }
  &__list{
    margin-top: 145px;
    display: flex;
    gap: 56px;
  }
}
</style>
