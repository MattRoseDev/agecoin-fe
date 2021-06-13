<template>
  <div class="flex flex-col my-1">
    <small class="text-gray-600 mt-2 mb-2">Duration Time</small>
    <div class="flex items-center justify-start w-full">
      <div class="flex items-center w-full">
        <div class="w-20 border-gray-300 border rounded-md overflow-hidden">
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
              :value="hour.value"
              :key="`hours-${hour.value}`"
              >{{ hour.title }}</option
            >
          </select>
        </div>
        <div class="text-4xl px-2">:</div>
        <div class="w-20 border-gray-300 border rounded-md overflow-hidden">
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
              :value="minute.value"
              :key="`minutes-${minute.value}`"
              >{{ minute.title }}</option
            >
          </select>
        </div>
        <div class="w-28 inline-flex flex-col items-center">
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
import { MINUTES, HOURS } from "@/constants";

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
    const { value: defaultCoins } = useField("defaultCoins", undefined, {
      initialValue: props.value || 0
    });
    const selectedHour = ref(0);
    const selectedMinute = ref(0);

    const handleSelectBox = (coins: number) => {
      selectedHour.value = Math.floor(coins / 60);
      selectedMinute.value = coins % 60;
    };

    handleSelectBox(props?.value || 0);

    const calculateCoins = () => {
      const hours = selectedHour.value;
      const minutes = selectedMinute.value;
      defaultCoins.value = hours * 60 + minutes;
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
