<template>
  <div>
    <div v-if="task">
      <div
        :class="[
          'flex flex-col pb-3 lg:pb-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full'
        ]"
      >
        <div
          @click="toggleExpandTask"
          :class="[task.status == 2 && 'opacity-50', 'cursor-pointer']"
        >
          <div class="flex mx-4 mt-4 items-start">
            <div
              :class="[
                task.status == 2 && 'line-through',
                'text-3xl flex-grow mb-0 font-bold dark:text-white'
              ]"
              v-if="task?.title"
            >
              {{ task.title }}
            </div>
            <span class="text-gray-500"
              ><ChevronDownIcon
                :class="[
                  shouldCompleteView && 'rotate-180',
                  'w-4 h-4 transform duration-300'
                ]"
            /></span>
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
                <span class="text-sm">{{ convertSecToMin(task.coins) }}</span>
                coins
              </small>
            </div>
          </div>
        </div>
        <Footer v-if="shouldCompleteView" :task="task" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Footer from "./components/Footer/index.vue";
import { Task } from "@/@types/task";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { convertSecToMin } from "@/utils/formats";

export default defineComponent({
  name: "TaskModule",
  components: {
    Footer,
    ChevronDownIcon
  },
  props: {
    task: Object as () => Task,
    completeView: Boolean
  },
  setup(props) {
    const shouldCompleteView = ref(props.completeView || props?.task?.active);

    const toggleExpandTask = () =>
      (shouldCompleteView.value = !shouldCompleteView.value);

    return { shouldCompleteView, toggleExpandTask, convertSecToMin };
  }
});
</script>

<style src="./style.css" scoped></style>
