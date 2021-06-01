<template>
  <input
    type="text"
    name="title"
    class="title"
    placeholder="Title"
    v-model="value"
    autocomplete="off"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useField } from "vee-validate";

export default defineComponent({
  name: "TitleModule",
  setup() {
    const { value } = useField("title");
    return { value };
  }
});
</script>

<style src="./style.css" scoped></style>
