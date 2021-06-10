<template>
  <div class="w-full lg:w-2/5 lg:min-w-80 flex flex-col">
    <div class="pt-2 p-2 lg:p-5">
      <Task />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task from "@/modules/task/index.vue";

export default defineComponent({
  name: "TasksPage",
  components: {
    Task
  }
});
</script>
