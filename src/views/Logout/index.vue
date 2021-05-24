<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ActionType } from "@/@enums/actions";
import router from "@/router";

export default defineComponent({
  name: "LogoutPage",
  setup() {
    const { dispatch } = useStore();
    dispatch(ActionType.Logout);
    router.push("login");
  }
});
</script>
