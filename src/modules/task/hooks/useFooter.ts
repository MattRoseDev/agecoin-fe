import { MutationType } from "@/@enums/mutations";
import { useStore } from "@/store";
import { ref } from "vue";
import { UseFooter, UseFooterProps } from "../@types";
import { useMutation } from "@vue/apollo-composable";
import {
  ARCHIVE_TASK,
  FINISH_TASK,
  PAUSE_TASK,
  START_TASK
} from "@/graphql/task";

export default ({ task }: UseFooterProps): UseFooter => {
  const store = useStore();
  const {
    mutate: mutateStartTask,
    onDone: onDoneStartTask,
    loading: loadingStartTask
  } = useMutation(START_TASK);

  const {
    mutate: mutatePauseTask,
    onDone: onDonePauseTask,
    loading: loadingPauseTask
  } = useMutation(PAUSE_TASK);

  const {
    mutate: mutateFinishTask,
    onDone: onDoneFinishTask,
    loading: loadingFinishTask
  } = useMutation(FINISH_TASK);

  const {
    mutate: mutateArchiveTask,
    onDone: onDoneArchiveTask,
    loading: loadingArchiveTask
  } = useMutation(ARCHIVE_TASK);

  const showMoreContent = ref(false);
  const toggleShowMoreContent = () => {
    showMoreContent.value = !showMoreContent.value;
  };

  const showDelete = ref(false);
  const toggleShowDelete = () => {
    showDelete.value = !showDelete.value;
  };

  const startTask = () => {
    mutateStartTask({
      taskId: task.id
    });

    onDoneStartTask(result => {
      if (result.data) {
        store.commit(MutationType.StartTask, task.id);
      }
    });
  };

  const pauseTask = () => {
    mutatePauseTask({
      taskId: task.id
    });

    onDonePauseTask(result => {
      if (result) {
        store.commit(MutationType.PauseTask, task.id);
      }
    });
  };

  const finishTask = () => {
    mutateFinishTask({
      taskId: task.id
    });

    onDoneFinishTask(result => {
      if (result) {
        store.commit(MutationType.FinishTask, result.data.finishTask);
      }
    });
  };

  const archiveTask = () => {
    mutateArchiveTask({
      taskId: task.id
    });

    onDoneArchiveTask(result => {
      if (result) {
        store.commit(MutationType.ArchiveTask, result.data.archiveTask);
      }
    });
  };

  return {
    showMoreContent,
    toggleShowMoreContent,
    showDelete,
    toggleShowDelete,
    startTask,
    pauseTask,
    finishTask,
    archiveTask,
    loadingStartTask,
    loadingPauseTask,
    loadingFinishTask,
    loadingArchiveTask
  };
};
