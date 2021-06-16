<template>
  <Form @submit="login" :validation-schema="schema">
    <div v-if="errorMessage.length > 0" class="rounded-md bg-red-50 p-2.5 mb-3">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-1">
          <h3 class="text-sm text-red-500">
            {{ errorMessage }}
          </h3>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <Input
        :label="t('default.login.username')"
        name="username"
        type="text"
        successMessage="Great!"
      />
    </div>
    <div class="mb-4">
      <Input
        :label="t('default.login.password')"
        name="password"
        type="password"
        successMessage="Excellent!"
      />
    </div>
    <Button
      type="submit"
      class="text-white bg-blue-500 hover:bg-blue-600 my-3"
      :loading="loading"
      >{{ t("default.login.button") }}</Button
    >
    <div class="flex justify-center">
      <Link
        to="/register"
        class="inline-flex mb-1 py-1 px-2 font-medium text-blue-500 hover:bg-blue-100"
        >Register Now</Link
      >
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form } from "vee-validate";
import Input from "@/components/Input/index.vue";
import Link from "@/components/Link/index.vue";
import Button from "@/components/Button/index.vue";
import useLogin from "./hooks/useLogin";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LoginModule",
  setup() {
    const { t } = useI18n();
    const { schema, login, loading, errorMessage } = useLogin();

    return { schema, login, loading, errorMessage, t };
  },
  components: {
    Form,
    Input,
    Link,
    Button
  }
});
</script>

<style src="./styles.css" scoped></style>
