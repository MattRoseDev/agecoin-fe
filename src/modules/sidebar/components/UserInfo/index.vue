<template>
  <div>
    <UserInfoSkeleton v-if="!store.getters.getUserInfo" />
    <span
      v-if="store.getters.getUserInfo"
      class="flex w-full justify-between items-center px-4 "
    >
      <router-link
        to="/profile"
        class="flex min-w-0 items-center justify-between space-x-3"
      >
        <Avatar class="w-10 h-10" />
        <span class="flex-1 flex flex-col min-w-0">
          <span
            class="text-gray-900 dark:text-white text-sm font-medium truncate"
          >
            {{ store.getters.getUserFullname }}
          </span>
          <span class="text-gray-500 dark:text-gray-300 text-sm truncate"
            >@{{ store.getters.getUserUsername }}</span
          >
        </span>
      </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";
import UserInfoSkeleton from "./UserInfoSkeleton.vue";

export default defineComponent({
  name: "UserInfoComponent",
  components: {
    Avatar,
    UserInfoSkeleton
  },
  setup() {
    const store = useStore();
    return { store };
  }
});
</script>
<style src="./style.css" scoped></style>
