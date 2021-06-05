<template>
  <div class="w-full lg:w-2/5 lg:min-w-80 flex flex-col">
    <div class="pt-2 p-2 lg:p-5">
      <router-link to="/task/add">
        <div
          class="p-5 w-full rounded-lg shadow flex items-center text-blue-500 bg-white overflow-hidden"
        >
          <PlusIcon class="w-6 h-6 mr-2" />New Task
        </div>
      </router-link>
      <Tasks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlusIcon } from "@heroicons/vue/outline";
import Tasks from "@/modules/tasks/index.vue";

export default defineComponent({
  name: "TasksPage",
  components: {
    PlusIcon,
    Tasks
  }
});
</script>
