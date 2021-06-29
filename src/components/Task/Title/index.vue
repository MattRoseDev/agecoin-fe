<template>
  <input
    type="text"
    name="title"
    class="title dark:bg-gray-800 dark:text-white"
    placeholder="Title"
    v-model="title"
    autocomplete="off"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "TitleComponent",
  props: {
    value: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const { value: title } = useField<string>("title", undefined, {
      initialValue: props.value || ""
    });

    return { title };
  }
});
</script>

<style src="./style.css" scoped></style>
