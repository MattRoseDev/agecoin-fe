<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/modules/login/index.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    Login
  }
});
</script>
