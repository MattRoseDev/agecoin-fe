<template>
  <div class="w-full bg-gray-100">
    <div class="pt-2 p-2 lg:p-5 lg:w-2/5 lg:min-w-80">
      <AddTask />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddTask from "@/modules/addTask/index.vue";

export default defineComponent({
  name: "AddTaskPage",
  components: {
    AddTask
  }
});
</script>
