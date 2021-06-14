<template>
  <div class="w-full rounded-lg bg-gray-200 p-4 flex flex-col items-start">
    <span class="h-10 bg-gray-300 inline-block rounded-md w-48"></span>
    <span class="h-4 w-16 bg-gray-300 inline-block rounded-md mt-4"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskSkeleton"
});
</script>
