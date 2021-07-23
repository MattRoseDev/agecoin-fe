<template>
  <div class="flex flex-col my-1">
    <small class="text-gray-600 dark:text-gray-200 mt-2 mb-2"
      >Duration Time</small
    >
    <div class="flex items-center justify-start w-full">
      <div class="flex items-center w-full">
        <div
          class="w-20 border-gray-300 dark:border-gray-700 border rounded-md overflow-hidden shadow-sm hover:shadow-none"
        >
          <small
            class="text-gray-600 dark:text-white text-center block border-b dark:broder-gray-700 bg-gray-50 dark:bg-gray-900"
            >hours</small
          >
          <select
            @change="calculateCoins"
            name="hours"
            class="appearance-none "
            v-model="selectedHour"
          >
            <option
              v-for="hour in hours"
              :value="hour.value"
              :key="`hours-${hour.value}`"
              >{{ hour.title }}</option
            >
          </select>
        </div>
        <div class="text-4xl px-2">:</div>
        <div
          class="w-20 border-gray-300 dark:border-gray-700 border rounded-md overflow-hidden shadow-sm hover:shadow-none"
        >
          <small
            class="text-gray-600 dark:text-white text-center block border-b dark:broder-gray-700 bg-gray-50 dark:bg-gray-900"
            >minutes</small
          >
          <select
            @change="calculateCoins"
            name="minutes"
            class="appearance-none "
            v-model="selectedMinute"
          >
            <option
              v-for="minute in minutes"
              :value="minute.value"
              :key="`minutes-${minute.value}`"
              >{{ minute.title }}</option
            >
          </select>
        </div>
        <div class="w-28 inline-flex flex-col items-center">
          <span class="font-bold text-3xl text-gray-900 dark:text-white">
            {{ defaultCoins }}
          </span>
          <span class="text-xs dark:text-white">coins</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent, ref } from "vue";
import { MINUTES, HOURS, SECOND_OF_MINUTE } from "@/constants";
import { convertSecToMin } from "@/utils/formats";

export default defineComponent({
  name: "DurationTimeComponent",
  props: {
    showCustomTime: {
      type: Boolean
    },
    toggleShowCustomTime: {
      type: Function
    },
    value: {
      type: Number,
      required: false
    }
  },
  setup(props) {
    const formatValue = (coins: number | undefined) => {
      if (!coins) return 0;

      return convertSecToMin(coins);
    };

    const { value: defaultCoins } = useField("defaultCoins", undefined, {
      initialValue: formatValue(props.value)
    });
    const selectedHour = ref(0);
    const selectedMinute = ref(0);

    const handleSelectBox = (coins: number) => {
      selectedHour.value = Math.floor(coins / SECOND_OF_MINUTE);
      selectedMinute.value = coins % SECOND_OF_MINUTE;
    };
    handleSelectBox(formatValue(props.value));

    const calculateCoins = () => {
      const hours = selectedHour.value;
      const minutes = selectedMinute.value;
      defaultCoins.value = hours * SECOND_OF_MINUTE + minutes;
    };

    return {
      hours: HOURS,
      minutes: MINUTES,
      calculateCoins,
      defaultCoins,
      selectedHour,
      selectedMinute
    };
  }
});
</script>

<style src="./style.css" scoped></style>
