<template>
  <div v-if="!showDelete" class="flex items-end pt-0 p-3 lg:p-4 lg:pt-0">
    <div class="flex">
      <Button :onClick="toggleShowDelete" class="startButton">
        <PlayIcon class="h-9 w-9" />
      </Button>
      <Button :onClick="toggleShowDelete" class="doneButton">
        <CheckCircleIcon class="h-9 w-9" />
      </Button>
    </div>
    <div class="flex justify-end flex-grow">
      <Button
        v-if="showMoreContent"
        :onClick="toggleShowDelete"
        class="hover:border-red-300 text-red-500 hover:bg-red-50 mr-3  w-10 h-10"
      >
        <TrashIcon class="w-6 h-6" />
      </Button>
      <Button
        v-if="showMoreContent"
        :to="`/tasks/${task.id}/edit`"
        class="hover:border-gray-300 text-gray-900 dark:text-white hover:bg-gray-50 mr-3 w-10 h-10"
      >
        <PencilAltIcon class="w-6 h-6" />
      </Button>
      <Button :onClick="toggleShowMoreContent" class="moreButton">
        <DotsHorizontalIcon class="w-6 h-6" />
      </Button>
    </div>
  </div>
  <Delete
    :toggleShowDelete="toggleShowDelete"
    :taskId="task.id"
    v-if="showDelete"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Delete from "../Delete/index.vue";
import Button from "../Button/index.vue";
import useFooter from "../../hooks/useFooter";
import {
  PencilAltIcon,
  TrashIcon,
  DotsHorizontalIcon
} from "@heroicons/vue/outline";
import { PlayIcon, CheckCircleIcon } from "@heroicons/vue/solid";
import { Task } from "@/@types/task";

export default defineComponent({
  name: "FooterComponent",
  components: {
    Button,
    Delete,
    PencilAltIcon,
    PlayIcon,
    TrashIcon,
    DotsHorizontalIcon,
    CheckCircleIcon
  },
  props: {
    task: Object as () => Task
  },
  setup() {
    return useFooter();
  }
});
</script>

<style src="./style.css" scoped></style>
