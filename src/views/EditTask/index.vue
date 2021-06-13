<template>
  <div class="w-full lg:w-2/5 lg:min-w-80">
    <div class="pt-2 p-2 lg:p-5 ">
      <EditTask />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditTask from "@/modules/editTask/index.vue";

export default defineComponent({
  name: "EditTaskPage",
  components: {
    EditTask
  }
});
</script>
