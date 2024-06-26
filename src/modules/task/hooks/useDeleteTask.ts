import { Ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { DELETE_TASK } from "@/graphql/task";
import { useStore } from "@/store";
import router from "@/router";
import { ActionType } from "@/@enums/actions";

type UseDeleteTask = {
  deleteTask: () => void;
  loading: Ref<boolean>;
};

export default (taskId: string): UseDeleteTask => {
  const { mutate, onDone, loading } = useMutation(DELETE_TASK);

  const deleteTask = () => {
    const store = useStore();
    mutate({
      taskId
    });

    onDone(result => {
      store.dispatch(ActionType.DeleteTask, result.data.deleteTask.id);
      router.push("/dashboard");
    });
  };

  return { deleteTask, loading };
};
