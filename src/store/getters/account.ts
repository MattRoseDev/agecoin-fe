import type { GetterTree } from "vuex";
import type { State } from "../state";
import { Account } from "@/@types/account";
import { Getters } from '.'
import { Task } from "@/@types/task";
import { User } from "@/@types/user";

export type AccountGettersType = {
  getUserInfo(state: State): User | undefined;
  getToken(state: State): Account['token'];
  getTasks(state: State): Task[];
  getTaskById(state: State): (taskId: string) => Task | undefined;
  getUserBirthday(state: State): User['birthday'] | undefined;
  getUserMaxAge(state: State): User['maxAge'] | undefined;
};

export const accountGetters: GetterTree<State, State> & Getters = {
  getUserInfo(state) {
    return state.account?.user || undefined;
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
  },
  getUserBirthday(state) {
    return state.account?.user?.birthday || undefined 
  },
  getUserMaxAge(state) {
    return state.account?.user?.maxAge || undefined 
  },
};
