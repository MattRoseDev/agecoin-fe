import { Ref, ref } from "vue";
import { useLazyQuery } from "@vue/apollo-composable";
import { LOGIN } from "@/graphql/auth";
import { useStore } from "@/store";
import router from "@/router";
import { ActionType } from "@/@enums/actions";
import { loginValidationSchema } from "@/validationSchemas/auth";

type LoginForm = {
  username: string;
  password: string;
};

type UseLogin = {
  schema: typeof loginValidationSchema;
  login: (formData: LoginForm) => void;
  loading: Ref<boolean>;
  errorMessage: Ref<string>;
};

export default (): UseLogin => {
  const errorMessage = ref("");

  const { load, loading, onResult, onError } = useLazyQuery(LOGIN);

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

  const login = (formData: LoginForm) => {
    load(LOGIN, formData);
  };

  return { schema: loginValidationSchema, login, loading, errorMessage };
};
