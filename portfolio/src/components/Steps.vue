<template>
  <div :class="`steps  ${directionClass}`">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

  const props = defineProps({
    direction:{
      type:String,
      required:false,
      validator(value:string){
        return ["horizontal", "vertical"].includes(value); 
      },
      default:() => "horizontal"
    },
    current:{
      type:Number,
      required:false,
      default:() => 0
    }
  })
  const directionClass = computed(()=>{
   return props.direction === "horizontal" ? "steps--horizontal" : "steps--vertical" 
  })
</script>

<style lang="scss" scoped>
</style>
