<template>
  <div class="cursor-pointer" @click="showFooter">
    <div v-if="task">
      <div
        class="flex flex-col pb-3 lg:pb-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full"
      >
        <div class="flex mx-4 mt-4 items-end ">
          <div
            :class="[
              task.status == 2 && 'line-through',
              'text-3xl flex-grow mb-0 font-bold dark:text-white'
            ]"
            v-if="task?.title"
          >
            {{ task.title }}
          </div>
        </div>
        <p
          class="text-sm mx-4 mt-3 font-medium dark:text-white"
          v-if="task?.description"
        >
          {{ task.description }}
        </p>
        <div class="relative mx-4">
          <div v-if="task?.coins" class="mt-2">
            <small
              class="text-xs inline-block text-gray-500 dark:text-gray-300"
            >
              <span class="text-sm">{{ task.coins }}</span> coins
            </small>
          </div>
        </div>
        <Footer v-if="shouldShowFooter || task.active" :task="task" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Footer from "./components/Footer/index.vue";
import { Task } from "@/@types/task";

export default defineComponent({
  name: "TaskModule",
  components: {
    Footer
  },
  props: {
    task: Object as () => Task,
    completeView: Boolean
  },
  setup(props) {
    const shouldShowFooter = ref(props.completeView);

    const showFooter = () => (shouldShowFooter.value = true);

    return { shouldShowFooter, showFooter };
  }
});
</script>

<style src="./style.css" scoped></style>
