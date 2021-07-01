import type { GetterTree } from "vuex";
import type { State } from "../state";
import { Account } from "@/@types/account";
import { User } from "@/@types/user";

export type AccountGettersType = {
  getUserInfo(state: State): User | undefined;
  getToken(state: State): Account['token'];
  
  getUserBirthday(state: State): User['birthday'] | undefined;
  getUserMaxAge(state: State): User['maxAge'] | undefined;
};

export const accountGetters: GetterTree<State, State> & AccountGettersType = {
  getUserInfo(state: State) {
    return state.account?.user || undefined;
  },
  getToken(state: State) {
    return state.account?.token;
  },
  getUserBirthday(state: State) {
    return state.account?.user?.birthday || undefined 
  },
  getUserMaxAge(state: State) {
    return state.account?.user?.maxAge || undefined 
  },
};
