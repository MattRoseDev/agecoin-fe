import { useMutation } from "@vue/apollo-composable";
import { EDIT_TASK } from "@/graphql/task";
import router from "@/router";
import { ref, watch } from "vue";
import { useStore } from "@/store";
import { useForm } from "vee-validate";
import { MutationType } from "@/@enums/mutations";
import useGetTask from "@/hooks/useGetTask";
import { editTaskValidationSchema } from "@/validationSchemas/task";
import { getRouteParamsByKey } from "@/utils/getRouteParams";

type EditTaskForm = {
  taskId: string;
  title: string;
  defaultCoins: number;
  description?: string;
};

export default () => {
  // TODO: fix type
  const taskId = getRouteParamsByKey("taskId");
  const { task, loading: taskLoading } = useGetTask(taskId);

  const { handleSubmit, isSubmitting, errors, setFieldValue } = useForm<
    EditTaskForm
  >({
    validationSchema: editTaskValidationSchema
  });

  setFieldValue("taskId", task.value.id);

  watch(task, function(currentTask) {
    setFieldValue("taskId", currentTask.id);
  });

  const isValid = ref<boolean>(!Object.values(errors).length);

  watch(errors, function(currentErrors) {
    isValid.value = !Object.values(currentErrors).length;
  });

  const { mutate, onDone, loading } = useMutation(EDIT_TASK);

  const onSubmit = handleSubmit((formData: EditTaskForm) => {
    if (isValid.value) {
      const store = useStore();
      mutate({
        ...formData,
        taskId: task.value.id
      });

      onDone(result => {
        store.commit(MutationType.EditTask, result.data.editTask);
        router.push(`/tasks/${task.value.id}`);
      });
    }
  });

  return { task, onSubmit, isValid, loading, isSubmitting, taskLoading };
};
