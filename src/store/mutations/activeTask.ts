import { MutationType } from '@/@enums/mutations'
import { Task } from '@/@types/task';
import type { State } from '../state'

export type ActiveTaskMutationsType = {
  [MutationType.SetActiveTask](state: State, activeTask: Task): void;
}

export const activeTaskMutations: ActiveTaskMutationsType = {
  [MutationType.SetActiveTask](state: State, activeTask: Task) {
    state.activeTask = activeTask
  },
};
