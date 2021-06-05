import { ref } from "vue";
import { useLazyQuery } from "@vue/apollo-composable";
import * as Yup from "yup";
import { LOGIN } from "@/graphql/auth";
import { useStore } from "@/store";
import router from "@/router";
import { ActionType } from "@/@enums/actions";

type LoginForm = {
  username: string;
  password: string;
};

export default () => {
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

  const schema = Yup.object().shape({
    username: Yup.string()
      .min(5, "username is too short!")
      .required("We cannot identify you without a username :)"),
    password: Yup.string()
      .min(5, "Good, but your password is too short!")
      .required("Sorry, But we need your password :(")
  });

  return { schema, login, loading, errorMessage };
};
