<template>
  <div class="overview">
    <div class="overview__introduction">
      <Headline :headline="`My Name Is`">
        <template #sub-headline>
          <p class="full-name">Nguyen Duc <span>Duy</span></p>
        </template>
      </Headline>
      <p class="description">
        Creative front-end developer with more than +5 years of experience in
        enterprise companies and startups. Proficient in JavaScript, Angular,
        and React. Passionate about UI/UX
      </p>
      <div class="social-link">
        <a href="" class="link-item"><img :src="instagramIcon" alt="" /></a>
        <a href="" class="link-item"><img :src="gitHubIcon" alt="" /></a>
        <a href="" class="link-item"><img :src="twitterIcon" alt="" /></a>
        <a href="" class="link-item"><img :src="linkedInIcon" alt="" /></a>
      </div>
    </div>
    <div class="overview__banner">
      <div class="banner__layer banner__layer--primary">
        <img :src="lines" alt="" />
      </div>
      <div class="banner__layer banner__layer--secondary"></div>
      <!-- <div class="banner__layer banner__layer--third">
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import instagramIcon from "@/assets/Instagram.png";
import gitHubIcon from "@/assets/Github.png";
import twitterIcon from "@/assets/Twitter.png";
import linkedInIcon from "@/assets/LinkedIn.png";
import lines from "@/assets/lines.png";
</script>
<script lang="ts">
import Headline from "@/components/Headline.vue";
export default {
  components: {
    Headline,
  },
};
</script>
<style lang="scss" scoped>
.overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 190px;
  padding: 150px 50px 140px 120px;
  &__introduction {
    padding: 105px 0;
    color: var(--cinder);

    .full-name {
      padding-top: 10px;
      font-family: $secondary-font;
      font-weight: 700;
      font-size: 44px;
      line-height: 55px;
      span {
        color: var(--purple);
      }
    }
    .description {
      font-size: 16px;
      line-height: 32px;
      padding-top: 32px;
    }
    .social-link {
      display: flex;
      gap: 24px;
      padding-top: 40px;
    }
  }
  &__banner {
    position: relative;
    height: 500px;
    margin: 24px 30px 23px 112px;
    .banner__layer {
      height: 398px;
      width: 336px;
      border-radius: 16px;
      &--secondary {
        @include rotate(-9.55);

        position: absolute;
        background-color: var(--purple);
        z-index: 1;
      }
      &--primary {
        position: absolute;
        background-color: var(--purple-light);
        z-index: 2;
        img {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>
