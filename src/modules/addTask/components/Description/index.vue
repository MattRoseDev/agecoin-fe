<template>
  <div class="mt-4">
    <small
      @click="toggleShowDescription"
      class="cursor-pointer inline-flex items-center mb-2 select-none"
      :class="showDescription ? 'text-gray-500' : 'text-blue-500'"
    >
      <PlusIcon v-if="!showDescription" class="w-4 h-4" />
      <MinusSmIcon v-if="showDescription" class="w-4 h-4" />
      description
    </small>
    <textarea
      v-if="showDescription"
      type="text"
      class="description"
      placeholder="Description"
      rows="5"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PlusIcon, MinusSmIcon } from "@heroicons/vue/outline";
import { useField } from "vee-validate";

export default defineComponent({
  name: "DescriptionComponent",
  setup() {
    const { value, handleReset } = useField("description");
    const showDescription = ref(false);
    const toggleShowDescription = () => {
      if (showDescription.value) {
        handleReset();
      }
      showDescription.value = !showDescription.value;
    };

    return { value, showDescription, toggleShowDescription };
  },
  components: {
    PlusIcon,
    MinusSmIcon
  }
});
</script>

<style src="./style.css" scoped></style>
