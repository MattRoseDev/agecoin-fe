import { MutationType } from '@/@enums/mutations'
import { Task } from '@/@types/task';
import type { State } from '../state'

export type ActiveTaskMutationsType = {
  [MutationType.SetActiveTask](state: State, activeTask: Task): void;
  [MutationType.SetActiveTaskById](state: State, taskId: Task['id']): void;
  [MutationType.ClearActiveTaskById](state: State, taskId: Task['id']): void;
}

export const activeTaskMutations: ActiveTaskMutationsType = {
  [MutationType.SetActiveTask](state: State, activeTask: Task) {
    state.activeTask = activeTask
  },
  [MutationType.SetActiveTaskById](state: State, taskId: Task['id']) {
    state.activeTask = state.tasks.find(task => task.id === taskId)
  },
  [MutationType.ClearActiveTaskById](state: State, taskId: Task['id']) {
    if(state.activeTask?.id === taskId) {
      state.activeTask = undefined
    }
  },
};
