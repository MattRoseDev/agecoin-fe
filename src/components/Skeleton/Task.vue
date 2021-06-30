<template>
  <div class="w-full rounded-lg bg-gray-200 dark:bg-gray-800 p-4 flex flex-col">
    <span
      class="h-10 bg-gray-300 dark:bg-gray-700 inline-block rounded-md w-48"
    ></span>
    <span
      class="h-4 w-16 bg-gray-300 dark:bg-gray-700 inline-block rounded-md my-4"
    ></span>
    <div v-if="buttons" class="flex justify-end w-100">
      <div class="flex flex-grow justify-start">
        <span
          class="w-12 h-12 bg-gray-300 dark:bg-gray-700 inline-block rounded-md"
        ></span>
      </div>
      <div class="flex">
        <span
          class="w-12 h-12 bg-gray-300 dark:bg-gray-700 inline-block rounded-md mr-3"
        ></span>
        <span
          class="w-12 h-12 bg-gray-300 dark:bg-gray-700 inline-block rounded-md"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskSkeleton",
  props: {
    buttons: Boolean
  }
});
</script>
