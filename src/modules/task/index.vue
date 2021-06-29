<template>
  <div>
    <Skeleton v-if="loading" />
    <div v-if="!loading">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg w-full">
        <div
          class="text-3xl px-4 pt-4 mb-0 font-bold dark:text-white"
          v-if="task?.title"
        >
          {{ task.title }}
        </div>
        <p
          class="text-sm px-4 my-2 font-medium dark:text-white"
          v-if="task?.description"
        >
          {{ task.description }}
        </p>
        <div class="relative px-4">
          <div v-if="task?.defaultCoins" class="pb-2">
            <small
              class="text-xs inline-block text-gray-500 dark:text-gray-300"
            >
              {{ task.defaultCoins }} coins
            </small>
          </div>
        </div>
        <div v-if="!showDelete" class="flex pt-0 p-4">
          <router-link :to="`/tasks/${task.id}/edit`"
            ><div
              class="flex items-center rounded-lg border text-xs p-3 mr-3 select-none shadow-sm hover:shadow-none"
            >
              <PencilAltIcon class="h-6 w-6" /></div
          ></router-link>
          <button
            @click="toggleShowDelete"
            class="flex items-center rounded-lg duration-150 border hover:border-red-500 text-xs p-3 text-red-500 select-none shadow-sm hover:shadow-none"
          >
            <TrashIcon class="h-6 w-6" />
          </button>
        </div>
        <Delete
          :toggleShowDelete="toggleShowDelete"
          :taskId="task.id"
          v-if="showDelete"
        />
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
import Delete from "./components/Delete/index.vue";
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
    Delete,
    PencilAltIcon,
    TrashIcon,
    PauseIcon,
    CheckCircleIcon
  },
  setup() {
    const { loading, task, showDelete, toggleShowDelete } = useTask();

    return { loading, task, showDelete, toggleShowDelete };
  }
});
</script>

<style src="./style.css" scoped></style>
