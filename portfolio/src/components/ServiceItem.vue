<template>
  <div class="services-item">
    <div class="wrapper">
      <div class="services-item__icon-container">
        <slot name="icon"> <img class :src="imageSrc" alt="" /> </slot>
      </div>
      <p class="services-item__title">{{ title }}</p>
      <p class="services-item__description">{{ description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return new URL(`../assets/${this.icon}`, import.meta.url).href;
    },
  },
};
</script>
<style lang="scss" scoped>
.services-item {
  color: var(--cinder);
  background-color: var(--white);
  border-radius: 8px;
  height: 294px;
  .wrapper {
    padding: 53px 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__icon-container {
    background-color: var(--purple-light);
    border-radius: 16px;
    width: 56px;
    height: 56px;
    img {
      // height: 24px;
      // width: 24px;
      padding: 16px;
    }
  }
  &__title {
    font-family: $secondary-font;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-top: 24px;
  }
  &__description {
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin-top: 16px;
  }
}
</style>
