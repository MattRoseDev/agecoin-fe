<template>
  <div class="w-full bg-white dark:bg-gray-800 shadow rounded-lg flex">
    <div
      class="flex flex-col justify-center items-center w-1/2 border-r border-dashed border-gray-200 dark:border-gray-600"
    >
      <div class="text-5xl font-bold dark:text-white">
        {{ numberFormat(dailyCoins) }}
      </div>
      <small class="text-xs mt-2 dark:text-gray-300">Remaining coins</small>
    </div>
    <div class="flex flex-col justify-center w-1/2 border-gray-300">
      <div
        class="flex items-center justify-center w-full h-full border-b border-dashed border-gray-200 dark:border-gray-600"
      >
        <div class="flex flex-col items-center text-blue-500 py-2">
          <span class="font-bold text-2xl">{{
            numberFormat(savedDailyCoins)
          }}</span>
          <small class="text-xs">Saved coins</small>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-full h-full  border-gray-300"
      >
        <div class="flex flex-col items-center text-gray-400 py-2">
          <span class="font-bold text-2xl">{{
            numberFormat(wastedDailyCoins)
          }}</span>
          <small class="text-xs">Wasted coins</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDailyCoins from "./hooks/useDailyCoins";

export default defineComponent({
  name: "DailyCoinsModule",
  setup() {
    return useDailyCoins();
  }
});
</script>

<style scoped></style>
