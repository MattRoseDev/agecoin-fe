<template>
  <router-link v-if="to" :to="to" class="link">
    <slot></slot>
  </router-link>
  <button v-else @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    onClick: Function,
    to: String
  }
});
</script>

<style src="./style.css" scoped></style>
