import { MutationType } from "@/@enums/mutations";
import { ADD_TASK } from "@/graphql/task";
import router from "@/router";
import { useMutation } from "@vue/apollo-composable";
import { useForm } from "vee-validate";
import { ref, watch } from "vue";
import { useStore } from "@/store";
import * as Yup from "yup";

type NewTaskForm = {
  title: string;
  defaultCoins: number;
  description?: string;
};

export default () => {
  const schema = Yup.object().shape({
    title: Yup.string()
      .min(1)
      .required(),
    defaultCoins: Yup.number()
      .min(5)
      .required(),
    description: Yup.string().min(0)
  });

  const { handleSubmit, isSubmitting, errors } = useForm<NewTaskForm>({
    // TODO: fix type
    validationSchema: schema as any,
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
        router.push("/tasks");
      });
    }
  });

  return {
    schema,
    onSubmit,
    isValid,
    handleSubmit,
    isSubmitting,
    errors,
    loading
  };
};
