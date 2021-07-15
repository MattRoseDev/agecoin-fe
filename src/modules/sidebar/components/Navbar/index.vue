<template>
  <nav class="fixed bottom-0 w-full z-20">
    <div
      class="flex flex-row-reverse justify-around items-stretch bg-white dark:bg-gray-800 shadow border-t dark:border-gray-600"
    >
      <router-link
        class="flex justify-center items-center w-full"
        to="/profile"
      >
        <Avatar class="w-7 h-7" />
      </router-link>
      <router-link
        v-for="item in navbar"
        class="py-3 w-full flex justify-center"
        :key="item.name"
        :to="item.to"
        v-slot="{ isActive }"
        exact
      >
        <component
          :is="item.icon"
          :class="[isActive ? 'active-icon' : 'inactive-icon', 'icon']"
          aria-hidden="true"
        />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";
import useSidebar from "./../../hooks/useSidebar";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    Avatar
  },
  setup() {
    const { navbar } = useSidebar();
    return { navbar };
  }
});
</script>
<style src="./style.css" scoped></style>
