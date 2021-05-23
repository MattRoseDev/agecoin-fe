<template>
  <router-link class="link" :to="to" :class="className">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link",
  props: {
    to: String,
    className: String,
  },
});
</script>
<style src="./style.css" scoped></style>
