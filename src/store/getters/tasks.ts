import { Task } from "@/@types/task";
import type { GetterTree } from "vuex";
import type { State } from "../state";

export type TasksGettersType = {
  getTasks(state: State): Task[];
  getTaskById(state: State): (taskId: string) => Task | undefined;
};

export const tasksGetters: GetterTree<State, State> & TasksGettersType = {
   getTasks(state: State) {
    return state.tasks;
  },
  getTaskById(state: State) {
    return (taskId: string) => 
      state.tasks.find(task => task.id == taskId) || undefined
  },
}
