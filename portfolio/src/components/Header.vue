<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logoIcon" alt="" />
      <span>Duy.</span>
    </div>
    <div class="header__menu">
      <div class="menu-item">Services</div>
      <div class="menu-item">Portfolios</div>
      <div class="menu-item">Experience</div>
      <div class="menu-item" v-on:click.prevent="doScrolling('#bottom',1000)">
        Blog
      </div>
      <div class="menu-item">...</div>
    </div>
    <div class="header__additional">
      <div class="theme-toggle" @click="changeTheme">
        <img :src="moonIcon" alt="" />
      </div>
      <button class="resume"><span>Resume</span></button>
    </div>
  </header>
</template>
<script setup lang="ts">
import logoIcon from "@/assets/logo.svg";
import moonIcon from "@/assets/moon.svg";
</script>
<script lang="ts">
export default {
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", this.theme);
    },
    getElementY(query: any) {
      return (
        window.pageYOffset +
        document.querySelector(query).getBoundingClientRect().top
      );
    },
    doScrolling(element: any, duration: number) {
      var startingY = window.pageYOffset;
      var elementY = this.getElementY(element);
      // If element is close to page's bottom then window will scroll only to some position above the element.
      var targetY =
        document.body.scrollHeight - elementY < window.innerHeight
          ? document.body.scrollHeight - window.innerHeight
          : elementY;
      var diff = targetY - startingY;
      // Easing function: easeInOutCubic
      // From: https://gist.github.com/gre/1650294
      var easing = function (t: number) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var start: number;

      if (!diff) return;

      // Bootstrap our animation - it will get called right before next frame shall be rendered.
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start;
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1);
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  margin: 40px 120px 0px 120px;
  font-size: 16px;
  line-height: 19px;
  color: var(--cinder);
  height: 50px;
  &__logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 26px;
    span {
      padding-left: 16px;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    padding: 15px;
    .menu-item {
      cursor: pointer;
    }
    .menu-item + .menu-item {
      margin-left: 56px;
    }
  }
  &__additional {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    .theme-toggle {
      width: 24px;
      cursor: pointer;
      &:hover {
        @include rotate(180);
      }
    }
    .resume {
      color: var(--cinder);

      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      border: 1px solid var(--darker-light);
      background-color: transparent;
      height: 100%;
      width: 102px;
      border-radius: 8px;
      margin-left: 32px;
      // span{
      //   padding: 16px 24px;
      // }
      &:hover {
        border: 1px solid var(--cinder);
      }
    }
  }
}
</style>
