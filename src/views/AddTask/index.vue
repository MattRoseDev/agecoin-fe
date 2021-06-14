<template>
  <div class="w-full lg:w-2/5 lg:min-w-80">
    <div class="p-2 lg:p-5 ">
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
