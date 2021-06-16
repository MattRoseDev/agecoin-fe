<template>
  <!-- TODO: add skeleton -->
  <div v-if="store.state.account.user" class="w-full lg:w-2/5 h-screen">
    <Profile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "@/modules/profile/index.vue";
import { useStore } from "@/store";
import { initApp } from "@/utils/init";

export default defineComponent({
  name: "ProfilePage",
  setup() {
    initApp();
    const store = useStore();

    return { store };
  },
  components: {
    Profile
  }
});
</script>
