<template>
  <div class="services" :id="MENU_CODE.CODE_SERVICES">
    <div class="services__container">
      <headline :headline="`SERVICES`" :sub-healine="`Specialized in`" />
      <div class="services__list">
        <service-item
          v-for="(service, index) in servicesList"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        >
        </service-item>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MENU_CODE } from "@/components/MenuConstants";
</script>
<script lang="ts">
import Headline from "@/components/Headline.vue";
import ServiceItem from "@/components/ServiceItem.vue";
export default {
  components: {
    Headline,
    ServiceItem,
  },
  data() {
    return {
      servicesList: [
        {
          icon: "crown.png",
          title: "UI/UX Design",
          description:
            "Turn what you have in mind of a digital product into reality. For any platform you consider.",
        },
        {
          icon: "crown.png",
          title: "UI/UX Design",
          description:
            "Turn what you have in mind of a digital product into reality. For any platform you consider.",
        },
        {
          icon: "crown.png",
          title: "UI/UX Design",
          description:
            "Turn what you have in mind of a digital product into reality. For any platform you consider.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.services {
  height: 800px;
  background-color: var(--light);
  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 105px;
    align-items: center;
    padding: 114px 120px 184px 120px;
  }
  &__list {
    display: flex;
    gap: 56px;
  }
}
</style>
