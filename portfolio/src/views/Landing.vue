<template>
  <div class="landing">
    <Header />
    <Overview />
    <Services />
    <MyWorks/>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
import Header from "@/components/Header.vue";
import Overview from "@/components/Overview.vue";
import Services from "@/components/Services.vue";
import MyWorks from "@/components/MyWorks.vue";

export default {
  components: {
    Header,
    Overview,
    Services,
    MyWorks
  },
};
</script>
<style lang="scss" scoped>
.landing {
  background-color: var(--white);
}
</style>
