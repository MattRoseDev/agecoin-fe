<template>
  <form @submit="onSubmit">
    <div class="flex flex-col shadow bg-white dark:bg-gray-800 rounded-lg p-4">
      <Title />
      <DurtationTime />
      <Description />

      <div class="flex">
        <Button
          type="submit"
          class=" bg-blue-500 text-white mt-2 px-3 py-1.5"
          :disabled="!isValid"
          :loading="loading || isSubmitting"
        >
          Add Task
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
import useAddTask from "./hooks/useAddTask";

export default defineComponent({
  name: "AddTaskModule",
  setup() {
    const { onSubmit, isValid, isSubmitting, loading } = useAddTask();
    provide("isValid", isValid);

    return { onSubmit, isValid, isSubmitting, loading };
  },
  components: {
    Button,
    DurtationTime,
    Title,
    Description
  }
});
</script>

<style src="./style.css" scoped></style>
