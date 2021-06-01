<template>
  <div class="flex flex-col">
    <small class="text-gray-700 mt-2 mb-2"
      >Duration Time: <span class="font-bold">{{ value }} coins</span></small
    >
    <div class="flex items-center justify-start w-full">
      <div class="flex items-center w-full">
        <div class="w-20 border-gray-300 border rounded-lg overflow-hidden">
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
        <div class="w-20 border-gray-300 border rounded-lg overflow-hidden">
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
      </div>

      <input type="hidden" name="coins" v-model="value" />
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DurationTimeModule",
  setup() {
    const { value } = useField("defaultAmount", undefined, { initialValue: 0 });
    const selectedHour = ref("00");
    const selectedMinute = ref("00");
    const calculateCoins = (e: any) => {
      const hours = parseInt(selectedHour.value) || 0;
      const minutes = parseInt(selectedMinute.value) || 0;
      value.value = hours * 60 + minutes;
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
      value,
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
