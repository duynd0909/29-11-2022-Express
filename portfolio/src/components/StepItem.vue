<template>
  <div class="steps__item">
    <div class="tail"></div>
    <div class="icon">
      <img :src="imageSrc" alt="" />
    </div>
    <div class="content">
      <div class="content__title">{{ props.title }}</div>
      <div class="content__description">{{ props.description }}</div>
      <div class="content__additional">{{ props.additional }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: () => "",
  },
  description: {
    type: String,
    required: false,
    default: () => "",
  },
  additional: {
    type: String,
    required: false,
    default: () => "",
  },
  icon: {
    type: String,
    required: false,
    default: () => "circle",
  },
});
const imageSrc = computed(() => {
  return new URL(`../assets/${props.icon}.png`, import.meta.url).href;
});
</script>
<style lang="scss" scoped>
.steps__item {
 position: relative;
 padding-bottom: 64px;
  .tail {
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: var(--darker-light);
    top:16px;
    left: 8px;
  }
  .icon {
    float: left;
    width: 16px;
    height: 16px;
  }
  .content{
    font-size: 14px;
    color: var(--cinder);
    padding-left: 36px;
    font-weight: 500;
    &__title{
      font-family: $secondary-font;
    }
    &__description{
      padding-top: 10px;
      color: var(--cinder-light);
      font-weight: 400;
    }
    &__additional{
      padding-top: 24px;
    }
  }
}
</style>
