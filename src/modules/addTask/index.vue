<template>
  <Form @submit="addTask" class="flex flex-col shadow bg-white rounded-lg p-5">
    <Title />
    <DurtationTime />
    <Description />

    <Button className=" bg-blue-500 text-white mt-1">Add Task</Button>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/index.vue";
import { Form } from "vee-validate";
import DurtationTime from "./components/DurationTime/index.vue";
import Title from "./components/Title/index.vue";
import Description from "./components/Description/index.vue";
import useAddTask from "./hooks/useAddTask";

export default defineComponent({
  name: "AddTaskPage",
  setup() {
    const { addTask } = useAddTask();
    return { addTask };
  },
  components: {
    Form,
    Button,
    DurtationTime,
    Title,
    Description
  }
});
</script>

<style src="./style.css" scoped></style>
