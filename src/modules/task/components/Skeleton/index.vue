<template>
  <div class="w-full flex flex-col items-center animate-pulse">
    <TaskSkeleton :buttons="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskSkeleton from "@/components/Skeleton/Task.vue";

export default defineComponent({
  name: "TaskSkeletonComponent",
  components: {
    TaskSkeleton
  }
});
</script>
