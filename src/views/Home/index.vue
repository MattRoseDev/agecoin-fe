<template>
  <div class="flex h-screen w-full items-center justify-center">
    <Button class="bg-blue-500 text-white rounded-lg px-4 py-2"
      ><router-link to="/login">Login</router-link></Button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/index.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Button
  }
});
</script>
