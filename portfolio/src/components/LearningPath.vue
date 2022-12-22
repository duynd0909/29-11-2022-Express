<template>
  <div class="learning-path">
    <div class="learning-path__container">
      <div class="learning-path__education">
        <headline
          :headline="`LEARNING PATH`"
          :sub-healine="`Education & Skills`"
        />
        <steps direction="vertical">
          <step-item
            v-for="(step, index) in learningPathData"
            :key="index"
            :title="step.title"
            :description="`${step.degree} - ${step.major}`"
            :additional="step.timeline"
          >
          </step-item>
        </steps>
      </div>
      <div class="learning-path__skill"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import Headline from "@/components/Headline.vue";
import Steps from "@/components/Steps.vue";
import StepItem from "@/components/StepItem.vue";
import type LearningPath from "@/types/LearningPath";
const learningPathData = reactive<Array<LearningPath>>([
  {
    title: "Kingston university",
    degree: `Master's degree`,
    major: "Software Engineering",
    timeline: "2019 - 2021",
  },
  {
    title: "Kingston university",
    degree: `Master's degree`,
    major: "Software Engineering",
    timeline: "2019 - 2021",
  },
]);
</script>
<style lang="scss" scoped>
  .learning-path{
    height: 910px;
    &__container{
      display: flex;
      padding: 105px 120px 175px 120px;
    }
    &__education{
      .steps{
        margin-top: 112px;
      }
    }
  }
</style>
