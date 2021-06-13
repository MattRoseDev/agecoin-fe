<template>
  <nav class="px-3 mt-4">
    <div>
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        v-slot="{ isActive }"
        exact
      >
        <div
          :class="[isActive ? 'active' : 'inactive', 'nav-item']"
          :aria-current="isActive ? 'page' : undefined"
        >
          <component
            :is="item.icon"
            :class="[isActive ? 'active-icon' : 'inactive-icon', 'icon']"
            aria-hidden="true"
          />
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import useSidebar from "./../../hooks/useSidebar";

export default defineComponent({
  name: "NavigationComponent",
  setup() {
    const { navigation } = useSidebar();
    return { navigation };
  }
});
</script>
<style src="./style.css" scoped></style>
