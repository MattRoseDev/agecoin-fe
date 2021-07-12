import { useQuery } from "@vue/apollo-composable";
import { GET_TASKS } from "@/graphql/task";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";
import { ref, Ref } from "vue";

type UseTasks = { loading: Ref<boolean> };

export default (): UseTasks => {
  const store = useStore();

  if (store.getters.isTasksDataFetched) {
    return { loading: ref(false) };
  } else {
    const { onResult, loading, stop } = useQuery(GET_TASKS, {
      timezoneOffset: new Date().getTimezoneOffset()
    });

    onResult(result => {
      if (result.data) {
        const {
          data: { getTasks }
        } = result;
        store.commit(MutationType.SetTasks, getTasks);
        stop();
      }
    });
    return { loading };
  }
};
