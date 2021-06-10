import type { GetterTree } from "vuex";
import type { State } from "../state";
import { Account } from "@/@types/account";
import { Getters } from '.'
import { Task } from "@/@types/task";

export type AccountGettersType = {
  getUserInfo(state: State): Account['user'];
  getToken(state: State): Account['token'];
  getTasks(state: State): Task[];
  getTaskById(state: State): (taskId: string) => Task | undefined;
};

export const accountGetters: GetterTree<State, State> & Getters = {
  getUserInfo(state) {
    return state.account?.user;
  },
  getToken(state) {
    return state.account?.token;
  },
  getTasks(state) {
    return state.account?.user?.tasks || [];
  },
  getTaskById(state) {
    return (taskId: string) => 
      state.account.user?.tasks?.find(task => task.id == taskId) || undefined
  }
};
