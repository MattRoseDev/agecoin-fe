import { ActionType } from "@/@enums/actions";
import { MutationType } from "@/@enums/mutations";
import { Task } from "@/@types/task";
import type { ActionAugments } from ".";

export type TasksActionsType = {
  [ActionType.StartTask](context: ActionAugments, taskId: Task['id']): void;
  [ActionType.PauseTask](context: ActionAugments, taskId: Task['id']): void;
  [ActionType.DeleteTask](context: ActionAugments, taskId: Task['id']): void;
  [ActionType.FinishTask](context: ActionAugments, task: Task): void;
  [ActionType.ArchiveTask](context: ActionAugments, task: Task): void;
};

export const tasksActions: TasksActionsType = {
  async [ActionType.StartTask]({ commit }:ActionAugments, taskId: Task['id']) {
    if(taskId) {
      commit(MutationType.StartTask, taskId)
      commit(MutationType.SetActiveTaskById, taskId)
    }
  },
  async [ActionType.PauseTask]({ commit }:ActionAugments, taskId: Task['id']) {
    if(taskId) {
      commit(MutationType.PauseTask, taskId)
      commit(MutationType.ClearActiveTaskById, taskId)
    }
  },
  async [ActionType.DeleteTask]({ commit }:ActionAugments, taskId: Task['id']) {
    if(taskId) {
      commit(MutationType.DeleteTask, taskId)
      commit(MutationType.ClearActiveTaskById, taskId)
    }
  },
   async [ActionType.FinishTask]({ commit }:ActionAugments, task: Task) {
    if(task) {
      commit(MutationType.FinishTask, task)
      commit(MutationType.ClearActiveTaskById, task.id)
    }
  },
  async [ActionType.ArchiveTask]({ commit }:ActionAugments, task: Task) {
    if(task) {
      commit(MutationType.ArchiveTask, task)
      commit(MutationType.ClearActiveTaskById, task.id)
    }
  },
}