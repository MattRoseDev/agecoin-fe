<template>
  <div>
    <div class="flex items-center space-x-3 px-5 pt-5">
      <Avatar class="h-14 w-14" />
      <div class="flex-grow">
        <h1 class="text-xl font-bold text-gray-900 dark:text-white">
          {{ store.state.account.user?.fullname }}
        </h1>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-300">
          @{{ store.state.account.user?.username }}
        </p>
      </div>
      <div class="h-full self-stretch pt-1.5">
        <router-link to="/setting"
          ><CogIcon class="h-6 w-6 text-gray-500"
        /></router-link>
      </div>
    </div>
    <div v-if="spentCoins" class="mt-5 mx-5">
      <small class="text-gray-600">Spent coins</small>
      <br />
      <div class="text-4xl font-bold">
        {{ numberFormat(spentCoins) }}
      </div>
    </div>
    <List class="mx-5 mt-3" v-bind="personal" />
    <List class="mx-5 mt-3" v-bind="ageCoins" />
    <div class="mx-5 mt-3">
      <small class="block mb-2 ml-1 font-bold text-gray-600">Appearance</small>
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <ul class="divide-y divide-gray-200">
          <li class="px-3 py-3 flex justify-between items-center">
            <span class="text-sm font-medium text-gray-700">Dark mode</span>
            <span
              class="text-sm font-medium text-gray-500 inline-flex items-center"
            >
              <Toggle
                :toggleFunction="toggleTheme"
                :initialValue="store.getters.isThemeDark"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";
import List from "@/components/List/index.vue";
import Toggle from "@/components/Toggle/index.vue";
import { CogIcon } from "@heroicons/vue/outline";
import useProfile from "./hooks/useProfile";

export default defineComponent({
  name: "ProfileModule",
  components: {
    Toggle,
    Avatar,
    List,
    CogIcon
  },
  setup() {
    return useProfile();
  }
});
</script>

<style scoped></style>
