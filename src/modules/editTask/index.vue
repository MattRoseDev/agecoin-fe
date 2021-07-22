<template>
  <Skeleton v-if="taskLoading" />
  <form @submit="onSubmit">
    <div
      v-if="task?.title"
      class="flex flex-col shadow bg-white dark:bg-gray-800 rounded-lg p-4"
    >
      <Title :value="task?.title" />
      <DurtationTime :value="task?.defaultCoins" />
      <Description :value="task?.description" />

      <div class="flex">
        <Button
          type="submit"
          class=" bg-blue-500 text-white mt-2 shadow hover:shadow-none px-3 py-1.5"
          :disabled="!isValid"
          :loading="loading || isSubmitting"
        >
          Edit Task
        </Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import Button from "@/components/Button/index.vue";
import DurtationTime from "@/components/Task/DurationTime/index.vue";
import Title from "@/components/Task/Title/index.vue";
import Description from "@/components/Task/Description/index.vue";
import useEditTask from "./hooks/useEditTask";
import Skeleton from "./components/Skeleton/index.vue";

export default defineComponent({
  name: "EditTaskModule",
  setup() {
    const {
      task,
      onSubmit,
      isValid,
      loading,
      isSubmitting,
      taskLoading
    } = useEditTask();
    provide("isValid", isValid);

    return { task, onSubmit, isValid, loading, isSubmitting, taskLoading };
  },
  components: {
    Button,
    DurtationTime,
    Title,
    Description,
    Skeleton
  }
});
</script>
