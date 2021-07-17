<template>
  <div>
    <label v-if="!!label" :for="name">{{ label }}</label>
    <div class="mt-1">
      <input
        :name="name"
        :id="name"
        :type="type"
        :value="inputValue"
        @input="handleChange"
        @blur="handleBlur"
        :placeholder="placeholder"
      />
      <small
        :class="{
          'error-message': !!errorMessage,
          'success-message': meta.valid
        }"
        v-show="errorMessage || meta.valid"
      >
        {{ errorMessage || successMessage }}
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent, watch } from "vue";
import type { InputType } from './@types'

export default defineComponent({
  name: "Input",
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value
    });

    watch(props, currentValue => {
      handleChange(currentValue.value)
    })

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
  props: {
    type: {
      type: String as () => InputType,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    successMessage: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
  },
});
</script>
<style src="./style.css" scoped></style>
