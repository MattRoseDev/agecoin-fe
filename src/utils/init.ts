import { useQuery } from "@vue/apollo-composable";
import { GET_USER_INFO } from "@/graphql/user";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";
import { isAuthenticated } from ".";
import { InitApp } from "./@types/init";
import router from "@/router";
import { ActionType } from "@/@enums/actions";

export const initApp: InitApp = () => {
  const store = useStore();

  if (isAuthenticated()) {
    const { onResult, onError, stop } = useQuery(GET_USER_INFO);

    onResult(result => {
      store.commit(MutationType.SetUser, result?.data?.getUserInfo);
      stop();
    });

    // TODO: use refresh token
    onError(error => {
      if (error) {
        store.dispatch(ActionType.Logout);
        router.push("login");
      }
    });
  }
  if (store.state.theme === "light") {
    document.querySelector("html")?.classList.remove("dark");
  } else {
    document.querySelector("html")?.classList.add("dark");
  }
};
