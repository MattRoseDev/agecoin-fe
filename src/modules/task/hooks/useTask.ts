import { getRouteParamsByKey } from "@/utils/getRouteParams";
import useGetTask from "@/hooks/useGetTask";
import { Ref } from "vue";
import { Task } from "@/@types/task";

type UseTask = {
  task: Ref<Task>;
  loading: Ref<boolean>;
};

export default (): UseTask => {
  const taskId = getRouteParamsByKey("taskId");
  const { task, loading } = useGetTask(taskId);

  return { loading, task };
};
