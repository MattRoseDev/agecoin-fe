import { getRouteParamsByKey } from "@/utils/getRouteParams";
import useGetTask from "@/hooks/useGetTask";
import { UseTask } from "../@types";

export default (): UseTask => {
  const taskId = getRouteParamsByKey("taskId");
  const { task, loading } = useGetTask(taskId);

  return { loading, task };
};
