<template>
  <div class="w-full flex flex-col items-center animate-pulse">
    <div
      v-for="item in items"
      :key="item"
      class="w-full rounded-lg bg-gray-100 mt-5 p-4 flex flex-col items-start"
    >
      <span class="h-10 w-64 bg-gray-200 inline-block rounded-md"></span>
      <span class="h-3 w-40 bg-gray-200 inline-block rounded-md mt-4"></span>
      <span class="h-4 w-14 bg-gray-200 inline-block rounded-md mt-4"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TasksSkeletonComponent",
  setup() {
    const items = new Array(4);
    return { items };
  }
});
</script>
