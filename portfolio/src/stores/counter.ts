import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function incrementByAmount(amount: number) {
    count.value = count.value + amount;
  }
  return { count, doubleCount, increment,incrementByAmount };
});
