import { useQuery } from "@vue/apollo-composable";
import { GET_TASKS } from "@/graphql/task";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";

export default () => {
  const { onResult, loading } = useQuery(GET_TASKS);

  onResult(result => {
    if (result.data) {
      const {
        data: { getTasks }
      } = result;
      const store = useStore();
      store.commit(MutationType.SetTasks, getTasks);
    }
  });

  return { loading };
};
