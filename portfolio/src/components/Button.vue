<template>
  <button
    :class="`custom-button 
    ${sizeClass}
    ${shapeClass}
    ${typeClass}
    ${activeClass}`"
  >
    <img v-if="icon" :src="iconSrc" alt="" class="custom-button__icon" />
    <slot name="content">
      <span v-if="text" class="custom-button__content">
        {{ text }}
      </span>
    </slot>
  </button>
</template>
<script setup lang="ts">
// import { v4 as uuidv4 } from "uuid";
</script>
<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: () => null,
    },
    text: {
      type: String,
      required: false,
      default: () => null,
    },
    size: {
      type: String,
      required: false,
      default: "medium",
      validator(value: string) {
        return ["large", "medium", "small"].includes(value);
      },
    },
    shape: {
      type: String,
      required: false,
      default: "default",
      validator(value: string) {
        return ["round", "semi-circle"].includes(value);
      },
    },
    type: {
      type: String,
      required: false,
      default: "normal",
      validator(value: string) {
        return ["light", "normal", "strong"].includes(value);
      },
    },
    active: {
      type: Boolean,
      required: false,
      default: () => true,
    },
  },
  computed: {
    iconSrc() {
      return new URL(`../assets/${this.icon}.png`, import.meta.url).href;
    },
    sizeClass() {
      return `custom-button--${this.size}`;
    },
    shapeClass() {
      return `custom-button--${this.shape}`;
    },
    typeClass() {
      return `custom-button--${this.type}`;
    },
    activeClass() {
      return `custom-button--${this.active ? "active" : "inactive"}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &__content {
    padding-left: 10px;
  }
  &--small {
    width: 40px;
    height: 40px;
  }
  &--medium {
    width: 56px;
    height: 56px;
  }
  &--large {
    height: 49px;
    width: 100%;
  }
  &--round {
    border-radius: 8px;
  }
  &--semi-circle {
    border-radius: 16px;
  }
  &--light {
    background-color: var(--purple-light);
    opacity: 0.5;
  }
  &--normal {
    background-color: var(--purple-light);
  }
  &--strong {
    background-color: var(--purple);
  }
  &--inactive {
    background-color: var(--purple-light);
    opacity: 0.5;
  }
}
</style>
