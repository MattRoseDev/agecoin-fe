<template>
  <div>
    <Skeleton v-if="loading" />
    <div v-if="!loading">
      <Task
        class="mb-2 lg:mb-5"
        v-for="task in store.state.tasks"
        :task="task"
        :key="task.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "@/modules/task/index.vue";
import Skeleton from "./components/Skeleton/index.vue";
import useTasks from "./hooks/useTasks";
import { useStore } from "@/store";

export default defineComponent({
  name: "TasksModule",
  components: {
    Task,
    Skeleton
  },
  setup() {
    const store = useStore();
    const { loading } = useTasks();

    return { store, loading };
  }
});
</script>

<style scoped></style>
