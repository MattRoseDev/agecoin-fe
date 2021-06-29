<template>
  <div class="w-full lg:w-2/5 lg:min-w-80">
    <div class="p-2 lg:p-5">
      <DailyCoins class="mb-2 lg:mb-5" />
      <Tasks class="mb-2 lg:mb-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DailyCoins from "@/modules/dailyCoins/index.vue";
import Tasks from "@/modules/tasks/index.vue";

export default defineComponent({
  name: "DashboardPage",
  components: {
    DailyCoins,
    Tasks
  }
});
</script>
