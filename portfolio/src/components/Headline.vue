<template>
  <div class="headline">
    <div class="headline__primary">
      <div class="divider"></div>
      <span>{{ headline }}</span>
    </div>
    <slot name="sub-headline">
      <p class="headline__secondary">{{ subHealine }}</p>
    </slot>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
export default {
  props: {
    headline: {
      type: String,
      required: true,
    },
    subHealine: {
      type: String,
      required: false,
      defualt: () => "",
    },
  },
};
</script>
<style lang="scss" scoped>
.headline {
  display: flex;
  flex-direction: column;
  width: fit-content;
  &__primary {
    color: var(--cinder-light);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 16px;
    span {
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 7.5px;
    }
    .divider {
      background: var(--gray-light);
      height: 2px;
      width: 16px;
    }
  }
  &__secondary {
    padding-top: 8px;
    font-family: $secondary-font;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: var(--cinder);
  }
}
</style>
