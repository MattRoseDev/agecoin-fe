<template>
  <button
    type="button"
    @click="toggleEnabled"
    :class="[
      enabled ? 'bg-blue-600 bg-opacity-80' : 'bg-gray-200',
      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
    ]"
    role="switch"
    aria-checked="false"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      :class="[
        enabled ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
      ]"
    ></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToggleComponent",
  props: {
    toggleFunction: {
      type: Function,
      required: true
    },
    initialValue: Boolean
  },
  setup(props) {
    const enabled = ref(props.initialValue);

    const toggleEnabled = () => {
      props.toggleFunction();
      enabled.value = !enabled.value;
    };
    return { enabled, toggleEnabled };
  }
});
</script>

<style scoped></style>
