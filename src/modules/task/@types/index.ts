import { Task } from "@/@types/task";
import { Ref } from "vue";

export type UseFooter = {
  showMoreContent: Ref<boolean>;
  toggleShowMoreContent: () => void;
  showDelete: Ref<boolean>;
  toggleShowDelete: () => void;
};

export type UseTask = {
  task: Ref<Task>;
  loading: Ref<boolean>;
};
