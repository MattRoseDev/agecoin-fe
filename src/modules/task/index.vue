<template>
  <div>
    <Skeleton v-if="loading" />
    <div v-if="!loading">
      <div class="bg-white shadow rounded-lg w-full">
        <div class="text-3xl px-4 pt-4 mb-0 font-bold" v-if="task?.title">
          {{ task.title }}
        </div>
        <p class="text-sm px-4 my-2 font-medium" v-if="task?.description">
          {{ task.description }}
        </p>
        <div class="relative px-4">
          <div v-if="task?.defaultCoins" class="pb-2">
            <small class="text-xs inline-block text-gray-500">
              {{ task.defaultCoins }} coins
            </small>
          </div>
        </div>
        <div class="flex pt-0 p-4">
          <router-link :to="`/tasks/${task.id}/edit`"
            ><div
              class="flex items-center rounded-lg border text-xs px-3 py-2 mr-2 select-none"
            >
              <PencilAltIcon class="h-4 w-4 mr-1" />
              Edit
            </div></router-link
          >
          <button
            class="flex items-center rounded-lg duration-150 border hover:border-red-500 text-xs px-3 py-2 text-red-500 select-none"
          >
            <TrashIcon class="h-4 w-4 mr-1" />
            Delete
          </button>
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
import {
  PencilAltIcon,
  TrashIcon,
  PauseIcon,
  CheckCircleIcon
} from "@heroicons/vue/outline";

export default defineComponent({
  name: "TaskModule",
  components: {
    Skeleton,
    PencilAltIcon,
    TrashIcon,
    PauseIcon,
    CheckCircleIcon
  },
  setup() {
    const { loading, task } = useTask();

    return { loading, task };
  }
});
</script>

<style src="./style.css" scoped></style>
