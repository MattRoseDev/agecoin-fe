<template>
  <div class="w-full lg:w-2/5 lg:min-w-80">
    <div class="p-2 lg:p-5">
      <Tasks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tasks from "@/modules/tasks/index.vue";

export default defineComponent({
  name: "TasksPage",
  components: {
    Tasks
  }
});
</script>
