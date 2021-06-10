<template>
  <form @submit="onSubmit">
    <div class="flex flex-col shadow bg-white rounded-lg p-4">
      <Title />
      <DurtationTime />
      <Description />

      <Button
        type="submit"
        className=" bg-blue-500 text-white mt-2"
        :disabled="!isValid"
        :loading="loading"
      >
        Add Task
      </Button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import Button from "@/components/Button/index.vue";
import DurtationTime from "./components/DurationTime/index.vue";
import Title from "./components/Title/index.vue";
import Description from "./components/Description/index.vue";
import useAddTask from "./hooks/useAddTask";

export default defineComponent({
  name: "AddTaskPage",
  setup() {
    const {
      onSubmit,
      isValid,
      schema,
      isSubmitting,
      errors,
      loading
    } = useAddTask();
    provide("isValid", isValid);

    return { onSubmit, isValid, schema, isSubmitting, errors, loading };
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
