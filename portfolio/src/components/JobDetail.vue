<template>
  <div class="job-detail">
    <p class="job-detail__title">
      {{ props.jobDetail.detailTitle }}
      <span>{{ props.jobDetail.company }}</span>
    </p>
    <p class="job-detail__location">{{ props.jobDetail.location }}</p>
    <p class="job-detail__timeline">{{ props.jobDetail.timeline }}</p>
    <div class="job-detail__technologies">
      <div
        class="technology"
        v-for="(item, index) in props.jobDetail.technologies"
        :key="index"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="job-detail__divider"></div>
    <div
      class="job-detail__description"
      v-for="(item, index) in props.jobDetail.description"
      :key="index"
    >
      <div class="dash"></div>
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type JobDetail from "@/types/JobDetail";
import type { PropType } from "vue";

const props = defineProps({
  jobDetail: {
    type: Object as PropType<JobDetail>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.job-detail {
  display: flex;
  flex-direction: column;
  color: var(--cinder-light);
  &__title {
    font-family: $secondary-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: var(--cinder);
    span {
      text-decoration: underline;
    }
    padding-bottom: 8px;
  }
  &__location {
    font-size: 14px;
    line-height: 17px;
    padding-top: 8px;
  }
  &__timeline {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding-top: 16px;
  }
  &__technologies {
    padding-top: 16px;
    display: flex;
    gap: 16px;
    .technology {
      min-width: 46px;
      height: 23px;
      border: 1px solid var(--darker-light);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding: 4px 8px;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
  &__divider {
    border: 1px solid #f1f1f1;
    height: 1px;
    width: 100%;
    margin: 32px 0;
  }
  &__description {
    display: flex;
    align-items: center;
    .dash {
      background: var(--gray-light);
      height: 2px;
      width: 10px;
    }
    span {
      font-size: 16px;
      padding-left: 8px;
    }
  }
}
</style>
