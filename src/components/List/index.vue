<template>
  <div>
    <small class="block mb-2 ml-1 font-bold text-gray-600 dark:text-gray-50">{{
      title
    }}</small>
    <div class="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
      <ul class="divide-y divide-gray-200 dark:divide-gray-600">
        <li
          v-for="item in items"
          :key="item.label"
          class="px-3 py-3 flex justify-between"
        >
          <span class="text-sm font-medium text-gray-700 dark:text-white">{{
            item.label
          }}</span>
          <span
            v-if="item.value"
            class="text-sm font-medium text-gray-500 dark:text-gray-100"
            >{{
              item.numberFormat ? numberFormat(item.value) : item.value
            }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ItemType } from './@types'
import {
  numberFormat
} from "@/utils/formats";

export default defineComponent({
  name: "ListComponent",
  props: {
    title: String,
    items: Array as () => ItemType[]
  },
  setup() {
    return { numberFormat }
  }
});
</script>

<style scoped></style>
