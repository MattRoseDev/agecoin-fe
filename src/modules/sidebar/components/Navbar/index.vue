<template>
  <nav class="fixed bottom-0 w-full z-20">
    <div
      class="flex flex-row-reverse justify-around items-stretch bg-white shadow border-t"
    >
      <router-link
        class="flex justify-center items-center w-full"
        to="/profile"
      >
        <Avatar className="w-7 h-7" />
      </router-link>
      <router-link
        v-for="item in navigation"
        class="py-2.5 w-full flex justify-center"
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

<script>
import { defineComponent } from "vue";
import { CollectionIcon, ViewGridIcon } from "@heroicons/vue/outline";
import Avatar from "@/components/Avatar";

export default defineComponent({
  name: "NavbarComponent",
  components: {
    Avatar,
    CollectionIcon,
    ViewGridIcon
  },
  setup() {
    const navigation = [
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: ViewGridIcon
      },
      {
        name: "Tasks",
        to: "/tasks",
        icon: CollectionIcon
      }
    ];
    return { navigation };
  }
});
</script>
<style src="./style.css" scoped></style>
