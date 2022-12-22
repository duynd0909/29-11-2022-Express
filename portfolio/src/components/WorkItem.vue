<template>
  <div class="work-item">
    <div class="work-item__thumbnail">
      <img :src="imageSrc" alt="" />
    </div>
    <div class="work-item__information">
      <div class="title">{{ title }}</div>
      <div class="technologies">
        <button
          class="technologies__itema"
          v-for="(item, index) in technologies"
          :key="index"
        >
          <span>{{ item }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
export default {
  props: {
    thumbnail: {
      type: String,
      required: false,
      default: () => "thumb.jpg",
    },
    title: {
      type: String,
      required: true,
      default: () => "Default",
    },
    technologies: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    imageSrc() {
      return new URL(`../assets/${this.thumbnail}`, import.meta.url).href;
    },
  },
};
</script>
<style lang="scss" scoped>
.work-item {
  height: 400px;
  max-width: 360px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  &__thumbnail {
    width: 100%;
    img {
      border-radius: 8px 8px 0px 0px;
    }
  }
  &__information {
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #f5f5f5;
    border-radius: 0px 0px 8px 8px;
    padding: 24px;
    .title {
      font-family: $secondary-font;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--cinder);
    }
    .technologies {
      display: flex;
      color: var(--cinder-light);
      font-weight: 500;
      font-size: 12px;
      gap: 16px;
      padding-top: 16px;
    }
  }
}
</style>
