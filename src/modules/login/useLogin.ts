import { reactive, ref } from "vue";
import { useLazyQuery } from "@vue/apollo-composable";
import { LOGIN } from "@/graphql/auth";
import { useStore } from "@/store";
import router from "@/router";
import { ActionType } from "@/@enums/actions";

export default () => {
  const formData = reactive({
    username: "",
    password: ""
  });

  const errorMessage = ref("");

  const { load, loading, onResult, onError } = useLazyQuery(LOGIN, formData);

  onResult(result => {
    if (result.data) {
      const {
        data: { login }
      } = result;
      const store = useStore();
      store.dispatch(ActionType.Login, {
        user: login.user,
        token: login.authToken.token
      });
      router.push("dashboard");
    }
  });

  onError(({ message }) => {
    if (message) {
      errorMessage.value = message;
    }
  });

  const login = () => {
    load(LOGIN, formData);
  };

  return { formData, login, loading, errorMessage };
};
