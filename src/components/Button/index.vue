<template>
  <button
    :type="type"
    :class="[disabled ? 'disabled' : '']"
    :disabled="disabled"
  >
    <!-- TODO: move this part to a component -->
    <div class="loading" v-if="loading">
      <svg
        class="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ButtonType } from './@types'

export default defineComponent({
  name: "Button",
  props: {
    type: String as () => ButtonType,
    loading: Boolean,
    disabled: Boolean,
  },
});
</script>
<style src="./style.css" scoped></style>
