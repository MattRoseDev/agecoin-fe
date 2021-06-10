import { useQuery } from "@vue/apollo-composable";
import { GET_TASK } from "@/graphql/task";
import router from "@/router";
import { ref } from "vue";
import type { Task } from "@/@types/task";
import { useStore } from "@/store";

export default () => {
  const store = useStore()
  const taskId = router.currentRoute.value.params.taskId.toString();
  const task = ref<Task | null>()
  const taskInfo = store.getters.getTaskById(taskId)

  if(taskInfo) {
    return { loading: false, task: taskInfo };
  } else {
    const { loading, onResult } = useQuery(GET_TASK, {
      taskId
    });
  
    onResult(result => {
      if (result.data) {
        const {
          data: { getTask }
        } = result;
        task.value = getTask
      }
    });

    return { loading, task } 
  }
};
