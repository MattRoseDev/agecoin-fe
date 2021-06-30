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
        <Footer :task="task" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Skeleton from "./components/Skeleton/index.vue";
import Footer from "./components/Footer/index.vue";
import useTask from "./hooks/useTask";

export default defineComponent({
  name: "TaskModule",
  components: {
    Skeleton,
    Footer
  },
  setup() {
    const { loading, task } = useTask();

    return { loading, task };
  }
});
</script>

<style src="./style.css" scoped></style>
