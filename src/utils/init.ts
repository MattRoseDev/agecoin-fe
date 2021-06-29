import { useQuery } from "@vue/apollo-composable";
import { GET_USER_INFO } from "@/graphql/user";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";
import { isAuthenticated } from ".";
import { InitApp } from "./@types/init";
import router from "@/router";
import { ActionType } from "@/@enums/actions";

export const initApp: InitApp = () => {
  if (isAuthenticated()) {
    const { onResult, onError } = useQuery(GET_USER_INFO);

    const store = useStore();
    onResult(result => {
      store.commit(MutationType.SetUser, result?.data?.getUserInfo);
    });

    if (store.state.theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }

    // TODO: use refresh token
    onError(error => {
      if (error) {
        store.dispatch(ActionType.Logout);
        router.push("login");
      }
    });
  }
};
