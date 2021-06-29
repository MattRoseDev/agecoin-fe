import type { GetterTree } from "vuex";
import type { State } from "../state";
import { Account } from "@/@types/account";
import { Task } from "@/@types/task";
import { User } from "@/@types/user";

export type AccountGettersType = {
  getUserInfo(state: State): User | undefined;
  getToken(state: State): Account['token'];
  getTasks(state: State): Task[];
  getTaskById(state: State): (taskId: string) => Task | undefined;
  getUserBirthday(state: State): User['birthday'] | undefined;
  getUserMaxAge(state: State): User['maxAge'] | undefined;
  isThemeDark(state: State): boolean | undefined;
};

export const accountGetters: GetterTree<State, State> & AccountGettersType = {
  getUserInfo(state: State) {
    return state.account?.user || undefined;
  },
  getToken(state: State) {
    return state.account?.token;
  },
  getTasks(state: State) {
    return state.account?.user?.tasks || [];
  },
  getTaskById(state: State) {
    return (taskId: string) => 
      state.account.user?.tasks?.find(task => task.id == taskId) || undefined
  },
  getUserBirthday(state: State) {
    return state.account?.user?.birthday || undefined 
  },
  getUserMaxAge(state: State) {
    return state.account?.user?.maxAge || undefined 
  },
  isThemeDark(state: State) {
    return state.account?.user?.theme == 'dark' 
  },
};
