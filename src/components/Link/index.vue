<template>
  <router-link class="link" :to="to">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link",
  props: {
    to: String
  }
});
</script>
<style src="./style.css" scoped></style>
