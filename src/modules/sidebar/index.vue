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
          <div>
            <span class="flex w-full justify-between items-center px-4 ">
              <router-link
                to="/profile"
                class="flex min-w-0 items-center justify-between space-x-3"
              >
                <Avatar class="w-10 h-10" />
                <span class="flex-1 flex flex-col min-w-0">
                  <span
                    class="text-gray-900 dark:text-white text-sm font-medium truncate"
                  >
                    Edward
                  </span>
                  <span
                    class="text-gray-500 dark:text-gray-300 text-sm truncate"
                    >@favecode</span
                  >
                </span>
              </router-link>
            </span>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <Navbar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";
import Navigation from "./components/Navigation/index.vue";
import Navbar from "./components/Navbar/index.vue";

export default defineComponent({
  name: "SidebarModule",
  components: {
    Avatar,
    Navigation,
    Navbar
  }
});
</script>
