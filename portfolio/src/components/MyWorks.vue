<template>
  <div class="my-works"  id="bottom">
    <div class="my-works__heading">
      <headline :headline="`My Works`" :sub-healine="`Featured Portfolios`" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<script lang="ts">
import Headline from "@/components/Headline.vue";
export default {
  components: {
    Headline,
  },
};
</script>
<style lang="scss" scoped></style>
