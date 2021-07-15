<template>
  <div class="flex flex-row h-screen max-w-7xl mx-auto lg:px-5 relative">
    <Sidebar v-if="store.state.account.isAuthenticated" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/modules/sidebar/index.vue";
import { useStore } from "@/store";
import { initApp } from "@/utils/init";

export default defineComponent({
  components: {
    Sidebar
  },
  setup() {
    initApp();
    const store = useStore();

    return { store };
  }
});
</script>

<style lang="scss"></style>
