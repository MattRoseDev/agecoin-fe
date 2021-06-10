<template>
  <div>
    <Skeleton v-if="loading" />
    <div v-if="!loading">
      <div class="bg-white shadow rounded-lg w-full">
        <div class="text-3xl px-4 pt-4 mb-0 font-bold" v-if="task?.title">
          {{ task.title }}
        </div>
        <div class="relative px-4">
          <div v-if="task?.defaultCoins" class="pb-2">
            <small class="text-xs inline-block text-gray-500">
              {{ task.defaultCoins }} coins
            </small>
          </div>
        </div>
        <div v-if="task?.active" class="w-full border-t flex">
          <button class="card-button border-r">
            Pause
            <PauseIcon class="w-6 h-6 ml-1" />
          </button>
          <button class="card-button text-blue-500">
            Done
            <CheckCircleIcon class="w-6 h-6 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Skeleton from "./components/Skeleton/index.vue";
import useTask from "./hooks/useTask";

export default defineComponent({
  name: "TaskModule",
  components: {
    Skeleton
  },
  setup() {
    const { loading, task } = useTask();

    return { loading, task };
  }
});
</script>

<style scoped></style>
