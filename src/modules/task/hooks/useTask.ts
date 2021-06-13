import { getRouteParamsByKey } from "@/utils/getRouteParams";
import useGetTask from "@/hooks/useGetTask";

export default () => {
  const taskId = getRouteParamsByKey("taskId");
  const { task, loading } = useGetTask(taskId);

  return { loading, task };
};
