import { MutationType } from "@/@enums/mutations";
import { ADD_TASK } from "@/graphql/task";
import router from "@/router";
import { useMutation } from "@vue/apollo-composable";
import { useForm } from "vee-validate";
import { Ref, ref, watch } from "vue";
import { useStore } from "@/store";
import { addTaskValidationSchema } from "@/validationSchemas/task";

type NewTaskForm = {
  title: string;
  defaultCoins: number;
  description?: string;
};

type UseAddTask = {
  onSubmit: () => void;
  isValid: Ref<boolean>;
  isSubmitting: Ref<boolean>;
  loading: Ref<boolean>;
};

export default (): UseAddTask => {
  const { handleSubmit, isSubmitting, errors } = useForm<NewTaskForm>({
    validationSchema: addTaskValidationSchema,
    initialErrors: {
      title: "title is required",
      defaultCoins: "defaultCoins is required",
      description: undefined
    }
  });

  const isValid = ref<boolean>(!Object.values(errors).length);

  watch(errors, function(currentErrors) {
    isValid.value = !Object.values(currentErrors).length;
  });

  const { mutate, onDone, loading } = useMutation(ADD_TASK);

  const onSubmit = handleSubmit((formData: NewTaskForm) => {
    if (isValid.value) {
      const store = useStore();
      mutate(formData);

      onDone(result => {
        store.commit(MutationType.AppendNewTask, result.data.addTask);
        router.push("/dashboard");
      });
    }
  });

  return {
    onSubmit,
    isValid,
    isSubmitting,
    loading
  };
};
