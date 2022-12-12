<template>
  <div class="landing">
    <Header />
    <Overview />
    <Services />
    <MyWorks/>
    <career-path></career-path>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
import Header from "@/components/Header.vue";
import Overview from "@/components/Overview.vue";
import Services from "@/components/Services.vue";
import MyWorks from "@/components/MyWorks.vue";
import CareerPath from "@/components/CareerPath.vue";

export default {
  components: {
    Header,
    Overview,
    Services,
    MyWorks,
    CareerPath
  },
};
</script>
<style lang="scss" scoped>
.landing {
  background-color: var(--white);
}
</style>
