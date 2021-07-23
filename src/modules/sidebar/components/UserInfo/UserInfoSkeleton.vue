<template>
  <span class="flex w-full justify-between items-center px-4 animate-pulse">
    <div class="flex min-w-0 items-center justify-between space-x-3">
      <Avatar class="w-10 h-10" />
      <span class="flex-1 flex flex-col min-w-0 h-10 space-y-2 ">
        <span class="bg-gray-300 dark:bg-gray-700 w-32 h-4 rounded-md"> </span>
        <span class="bg-gray-300 dark:bg-gray-700 w-24 h-4 rounded-md"> </span>
      </span>
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";

export default defineComponent({
  name: "UserInfoSkeletonComponent",
  components: {
    Avatar
  }
});
</script>
