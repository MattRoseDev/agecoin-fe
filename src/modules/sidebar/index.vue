<template>
  <div>
    <div class="hidden lg:flex lg:flex-col items-start py-5 h-full">
      <div
        class="flex flex-col w-72 shadow bg-white dark:bg-gray-800 rounded-lg top-0 sticky mb-3"
      >
        <div
          class="flex items-center px-5 py-4 font-bold border-b boder-gray-900 dark:border-gray-600 dark:text-white"
        >
          Logo
        </div>

        <div class="h-0 flex-1 flex flex-col overflow-y-auto pt-5 pb-2">
          <UserInfo />
          <Navigation />
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <Navbar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation/index.vue";
import Navbar from "./components/Navbar/index.vue";
import UserInfo from "./components/UserInfo/index.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "SidebarModule",
  components: {
    Navigation,
    Navbar,
    UserInfo
  },
  setup() {
    const store = useStore();

    return { store };
  }
});
</script>
