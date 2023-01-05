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
import { PropType, ref ,onMounted} from "vue";
const emit = defineEmits({
  "update:modelValue": (selectedKey) => {
    return selectedKey
  },
});
const props = defineProps({
  menuList: {
    type: Object as PropType<Array<Menu>>,
    required: true,
  },
  value: {
    type: String,
    required: false,
    default: () => "",
  },
});
onMounted(()=>{
  testCallingMount()
})
const selectedKeys = ref(props.value);
const imageSrc = ref(
  new URL(`../assets/arrow-right.png`, import.meta.url).href
);
function onChangeSelectedKey(key: string) {
  selectedKeys.value = key;
  emit("update:modelValue", key);
}
function testCallingMount(){
  console.log('Called');
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
