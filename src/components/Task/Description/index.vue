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
      v-model="description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PlusIcon, MinusSmIcon } from "@heroicons/vue/outline";
import { useField } from "vee-validate";

export default defineComponent({
  name: "DescriptionComponent",
  setup(props) {
    const { value: description, handleChange } = useField("description", undefined, {
      initialValue: props.value
    });
    const tempValue = ref("");

    const showDescription = ref(!!props.value);
    const toggleShowDescription = () => {
      if (showDescription.value) {
        tempValue.value = description.value;
        handleChange("");
      } else {
        description.value = tempValue.value;
      }
      showDescription.value = !showDescription.value;
    };

    return { description, showDescription, toggleShowDescription };
  },
  components: {
    PlusIcon,
    MinusSmIcon
  },
  props: {
    value: {
      type: String,
      required: false
    }
  }
});
</script>

<style src="./style.css" scoped></style>
