<template>
  <DatePicker v-model="date" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { DatePicker } from "v-calendar";

export default defineComponent({
  name: "DatePicker",
  components: {
    DatePicker
  },
  setup() {
    const date = ref(new Date());

    return { date };
  }
});
</script>
