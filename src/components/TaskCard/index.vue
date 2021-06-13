<template>
  <router-link :to="`/tasks/${id}`">
    <div class="bg-white mb-2 lg:mb-5 shadow rounded-lg w-full">
      <div class="text-3xl px-4 pt-4 mb-0 font-bold" v-if="title">
        {{ title }}
      </div>
      <p class="text-sm px-4 my-2 font-medium" v-if="description">
        {{ description }}
      </p>
      <div class="relative px-4">
        <div v-if="defaultCoins" class="pb-2">
          <small class="text-xs inline-block text-gray-500">
            {{ defaultCoins }} coins
          </small>
        </div>
      </div>
      <div v-if="active" class="w-full border-t flex">
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
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CheckCircleIcon, PauseIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "Task",
  props: {
    id: String,
    title: String,
    description: String,
    active: Boolean,
    defaultCoins: Number
  },
  components: {
    CheckCircleIcon,
    PauseIcon
  }
});
</script>
<style src="./style.css" scoped></style>
