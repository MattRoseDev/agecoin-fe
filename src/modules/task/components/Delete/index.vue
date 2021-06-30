<template>
  <div
    class="w-full flex items-center justify-between p-3 lg:p-4 border-t dark:border-gray-600 border-dashed"
  >
    <p class="font-bold dark:text-white">Delete your Task?</p>
    <div class="flex text-xs">
      <Button
        @click="toggleShowDelete"
        class="flex items-center rounded-lg border text-xs px-3 py-2 mr-2 select-none dark:text-white"
        >Cancel</Button
      >
      <Button
        @click="deleteTask"
        :loading="loading"
        class="flex items-center rounded-lg duration-150 text-xs px-3 py-2 text-white bg-red-500 select-none"
        ><TrashIcon class="h-4 w-4 mr-1" />Delete</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/index.vue";
import { TrashIcon } from "@heroicons/vue/outline";
import useDeleteTask from "./../../hooks/useDeleteTask";

export default defineComponent({
  name: "DeleteComponent",
  props: {
    toggleShowDelete: Function,
    taskId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return useDeleteTask(props.taskId);
  },
  components: {
    Button,
    TrashIcon
  }
});
</script>
