<template>
  <div :class="className">
    <label v-if="!!label" :for="id">{{ label }}</label>
    <div class="mt-1">
      <input
        :type="type"
        :id="id"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { InputType } from './@types'

export default defineComponent({
  name: "Input",
  props: {
    type: {
      type: String as () => InputType,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    },

  },
});
</script>
<style src="./style.css" scoped></style>
