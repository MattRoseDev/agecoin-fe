<template>
  <div>
    <Loader v-if="!store.state.dailyCoins" />
    <div
      v-if="store.state.dailyCoins"
      class="w-full bg-white dark:bg-gray-800 shadow rounded-lg flex"
    >
      <div
        class="flex flex-col justify-center items-center w-1/2 border-r border-dashed border-gray-200 dark:border-gray-600"
      >
        <div class="text-5xl font-bold dark:text-white">
          {{
            numberFormat(
              convertSecToMin(store.state.dailyCoins?.remainingCoins)
            )
          }}
        </div>
        <small class="text-xs mt-2 dark:text-gray-300">Remaining coins</small>
      </div>
      <div class="flex flex-col justify-center w-1/2 border-gray-300">
        <div
          class="flex items-center justify-center w-full h-full border-b border-dashed border-gray-200 dark:border-gray-600"
        >
          <div class="flex flex-col items-center text-blue-500 py-2">
            <span class="font-bold text-2xl">{{
              numberFormat(convertSecToMin(store.state.dailyCoins?.savedCoins))
            }}</span>
            <small class="text-xs">Saved coins</small>
          </div>
        </div>
        <div
          class="flex items-center justify-center w-full h-full  border-gray-300"
        >
          <div class="flex flex-col items-center text-gray-400 py-2">
            <span class="font-bold text-2xl">{{
              numberFormat(convertSecToMin(store.state.dailyCoins?.wastedCoins))
            }}</span>
            <small class="text-xs">Wasted coins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { convertSecToMin } from "@/utils/formats";
import { defineComponent } from "vue";
import useDailyCoins from "./hooks/useDailyCoins";
import Loader from "./components/Loader/index.vue";

export default defineComponent({
  name: "DailyCoinsModule",
  components: {
    Loader
  },
  setup() {
    const { store, numberFormat } = useDailyCoins();
    return { store, numberFormat, convertSecToMin };
  }
});
</script>

<style scoped></style>
