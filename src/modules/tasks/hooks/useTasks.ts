import { useQuery } from "@vue/apollo-composable";
import { GET_TASKS } from "@/graphql/task";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";

export default () => {
  const store = useStore();

  if (!store.getters.getTasks.length) {
    const { onResult, loading } = useQuery(GET_TASKS);

    onResult(result => {
      if (result.data) {
        const {
          data: { getTasks }
        } = result;
        store.commit(MutationType.SetTasks, getTasks);
      }
    });
    return { loading };
  } else {
    return { loading: false };
  }
};
