import type { GetterTree } from "vuex";
import type { State } from "../state";
import type { User } from "@/@types/user";
import { Nullable } from "@/@types";
import { Account } from "@/@types/account";

export type Getters = {
  getUserInfo(state: State): Account['user'];
  getToken(state: State): Account['token'];
};

export const getters: GetterTree<State, State> & Getters = {
  getUserInfo(state) {
    return state.account?.user;
  },
  getToken(state) {
    return state.account?.token;
  }
};
