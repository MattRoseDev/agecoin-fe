<template>
  <div class="w-full flex flex-col items-center animate-pulse">
    <TaskSkeleton
      v-for="item in items"
      :key="item"
      v-bind="item"
      class="mb-2 lg:mb-5"
    />
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
    const items = [
      {
        titleWidth: 52
      },
      {
        titleWidth: 40
      },
      {
        titleWidth: 64
      },
      {
        titleWidth: 32
      }
    ];
    return { items };
  }
});
</script>
