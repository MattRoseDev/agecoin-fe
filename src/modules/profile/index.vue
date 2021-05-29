<template>
  <div>
    <div class="flex items-center space-x-3 px-5 pt-5">
      <Avatar className="h-14 w-14" />
      <div class="flex-grow">
        <h1 class="text-xl font-bold text-gray-900">
          {{ store.state.account.user?.fullname }}
        </h1>
        <p class="text-sm font-medium text-gray-500">
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
      <div class="text-4xl font-black">
        {{ coinFormat(spentCoins) }}
      </div>
    </div>
    <div class="mx-5 mt-3">
      <small class="block mb-2 ml-1 font-bold text-gray-500"
        >Personal Information</small
      >
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <ul class="divide-y divide-gray-200">
          <li class="px-3 py-3 flex justify-between">
            <span class="text-sm font-medium text-gray-700">Email</span>
            <span class="text-sm font-medium text-gray-500">{{
              store.state.account.user?.email
            }}</span>
          </li>
          <li class="px-3 py-3 flex justify-between">
            <span class="text-sm font-medium text-gray-700">Birthday</span>
            <span class="text-sm font-medium text-gray-500">{{
              dateFormat(store.state.account.user?.birthday) || "--"
            }}</span>
          </li>
          <li class="px-3 py-3 flex justify-between">
            <span class="text-sm font-medium text-gray-700">Max age</span>
            <span class="text-sm font-medium text-gray-500">{{
              store.state.account.user?.maxAge || "--"
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "@/components/Avatar/index.vue";
import { CogIcon } from "@heroicons/vue/outline";
import { useStore } from "@/store";
import { getStatus } from "@/utils/coins";
import { coinFormat, dateFormat } from "@/utils/formats";

export default defineComponent({
  name: "ProfileModule",
  components: {
    Avatar,
    CogIcon
  },
  setup() {
    const store = useStore();
    const { spentCoins } = getStatus();

    return { store, coinFormat, dateFormat, spentCoins };
  }
});
</script>

<style scoped></style>
