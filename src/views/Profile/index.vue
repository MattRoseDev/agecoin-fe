<template>
  <div class="w-full lg:w-2/5 h-screen">
    <Profile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "@/modules/profile/index.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    Profile
  }
});
</script>
