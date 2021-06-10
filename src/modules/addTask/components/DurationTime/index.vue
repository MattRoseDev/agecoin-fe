<template>
  <div class="flex flex-col my-1">
    <small class="text-gray-600 mt-2 mb-2">Duration Time</small>
    <div class="flex items-center justify-start w-full">
      <div class="flex items-center w-full">
        <div class="w-1/3 border-gray-300 border rounded-md overflow-hidden">
          <small class="text-gray-600 text-center block border-b bg-gray-50"
            >hours</small
          >
          <select
            @change="calculateCoins"
            name="hours"
            class="appearance-none"
            v-model="selectedHour"
          >
            <option
              v-for="hour in hours"
              :value="hour"
              :key="`hours-${hour}`"
              >{{ hour }}</option
            >
          </select>
        </div>
        <div class="text-4xl px-2">:</div>
        <div class="w-1/3 border-gray-300 border rounded-md overflow-hidden">
          <small class="text-gray-600 text-center block border-b bg-gray-50"
            >minutes</small
          >
          <select
            @change="calculateCoins"
            name="minutes"
            class="appearance-none"
            v-model="selectedMinute"
          >
            <option
              v-for="minute in minutes"
              :value="minute"
              :key="`minutes-${minute}`"
              >{{ minute }}</option
            >
          </select>
        </div>
        <div class="w-2/5 inline-flex flex-col items-center">
          <span class="font-bold text-3xl text-gray-900">
            {{ defaultCoins }}
          </span>
          <span class="text-xs">coins</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DurationTimeComponent",
  setup() {
    const { value: defaultCoins } = useField("defaultCoins", undefined, {
      initialValue: 0
    });
    const selectedHour = ref("00");
    const selectedMinute = ref("00");
    const calculateCoins = (e: any) => {
      const hours = parseInt(selectedHour.value) || 0;
      const minutes = parseInt(selectedMinute.value) || 0;
      defaultCoins.value = hours * 60 + minutes;
    };

    const hours = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    const minutes = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ];

    return {
      hours,
      minutes,
      calculateCoins,
      defaultCoins,
      selectedHour,
      selectedMinute
    };
  },
  props: {
    showCustomTime: {
      type: Boolean
    },
    toggleShowCustomTime: {
      type: Function
    }
  }
});
</script>

<style src="./style.css" scoped></style>
