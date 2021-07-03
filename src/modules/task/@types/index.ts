import { Task } from "@/@types/task";
import { Ref } from "vue";

export type UseFooter = {
  showMoreContent: Ref<boolean>;
  toggleShowMoreContent: () => void;
  showDelete: Ref<boolean>;
  toggleShowDelete: () => void;
  startTask: () => void;
  pauseTask: () => void;
  finishTask: () => void;
  loadingStartTask: Ref<boolean>;
  loadingPauseTask: Ref<boolean>;
  loadingFinishTask: Ref<boolean>;
};

export type UseFooterProps = {
  task: Task;
};

export type UseTask = {
  task: Ref<Task>;
  loading: Ref<boolean>;
};
