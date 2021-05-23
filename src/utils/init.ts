import { useQuery } from "@vue/apollo-composable";
import { GET_USER_INFO } from "@/graphql/user";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";
import { isAuthenticated } from ".";

export const initApp = () => {
  if (isAuthenticated()) {
    const { onResult } = useQuery(GET_USER_INFO);

    const store = useStore();
    onResult(result => {
      store.commit(MutationType.SetUser, result?.data?.getUserInfo);
    });
  }
};
