<template>
  <div class="menu">
    <div
      v-for="menu in props.menuList"
      :key="menu.key"
      class="menu__item"
      :class="menu.key === selectedKeys ? 'active' : ''"
      @click="onChangeSelectedKey(menu.key)"
    >
      <div class="item-container">
        <span class="title">{{ menu.title }}</span>
        <img class="icon" :src="imageSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type Menu from "@/types/Menu";
import { defineProps, PropType, ref, reactive, computed } from "vue";
// interface JobDetail {
//   id: number;
//   title: string;
//   detailTitle: string;
//   location: string;
//   timeline: string;
//   technologies: Array<string>;
//   description: Array<string>;
// }

// const props = defineProps({
//   jobList:{
//     type: Object as PropType<Array<JobDetail>>
//     re
//   }
// });
const props = defineProps({
  menuList: {
    type: Object as PropType<Array<Menu>>,
    required: true,
  },
});
const openKeys = ref(1);
const selectedKeys = ref(props.menuList[0].key);
const imageSrc = ref(
  new URL(`../assets/arrow-right.png`, import.meta.url).href
);
const activeItemClass = ref(1);

function onChangeSelectedKey(key: string) {
  selectedKeys.value = key;
}
</script>

<style lang="scss" scoped>
.menu {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  &__item {
    cursor: pointer;
    .item-container {
      display: flex;
      padding: 14px 32px;
      align-items: center;
      .icon {
        display: none;
        margin-left: auto;
        height: 12px;
        // width: 7px;
        // height: 7px;
      }
    }
  }
  .active {
    background-color: var(--white);
    border-radius: 4px;
    color: var(--purple);
    .icon {
      display: block;
    }
  }
}
</style>
