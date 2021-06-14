import { getRouteParamsByKey } from "@/utils/getRouteParams";
import useGetTask from "@/hooks/useGetTask";
import { Ref, ref } from "vue";
import { Task } from "@/@types/task";

type UseTask = {
  task: Ref<Task>;
  loading: Ref<boolean>;
  showDelete: Ref<boolean>;
  toggleShowDelete: () => void;
};

export default (): UseTask => {
  const showDelete = ref(false);
  const taskId = getRouteParamsByKey("taskId");
  const { task, loading } = useGetTask(taskId);

  const toggleShowDelete = () => {
    showDelete.value = !showDelete.value;
  };
  return { loading, task, showDelete, toggleShowDelete };
};
