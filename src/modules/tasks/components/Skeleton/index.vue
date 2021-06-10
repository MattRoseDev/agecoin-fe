<template>
  <div class="w-full flex flex-col items-center animate-pulse">
    <TaskSkeleton v-for="item in items" :key="item" class="mt-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskSkeleton from "@/components/Skeleton/Task.vue";

export default defineComponent({
  name: "TasksSkeletonComponent",
  components: {
    TaskSkeleton
  },
  setup() {
    const items = new Array(4);
    return { items };
  }
});
</script>
