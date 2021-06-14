import { useQuery } from "@vue/apollo-composable";
import { GET_TASK } from "@/graphql/task";
import { Ref, ref } from "vue";
import type { Task } from "@/@types/task";
import { useStore } from "@/store";
import { MutationType } from "@/@enums/mutations";

type UseGetTask = { task: Ref<Task>; loading: Ref<boolean> };

export default (taskId: string): UseGetTask => {
  const store = useStore();
  const task = ref<Task>({
		id: '',
		title: '',
		defaultCoins: 0,
		description: ''
	});
  const taskInfo = store.getters.getTaskById(taskId);

  if (taskInfo) {
    return { loading: ref(false), task: ref(taskInfo) };
  } else {
    const { loading, onResult } = useQuery(GET_TASK, {
      taskId
    });

    onResult(result => {
      if (result.data) {
        const {
          data: { getTask }
        } = result;
				store.commit(MutationType.AppendNewTask, getTask)
        task.value = getTask;
      }
    });

    return { loading, task };
  }
};
