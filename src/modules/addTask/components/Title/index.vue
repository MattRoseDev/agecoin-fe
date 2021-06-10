<template>
  <input
    type="text"
    name="title"
    class="title"
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
  setup() {
    const { value: title } = useField<string>("title");

    return { title };
  }
});
</script>

<style src="./style.css" scoped></style>
