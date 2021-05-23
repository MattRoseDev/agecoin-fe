import { GetterTree } from "vuex";
import { State } from "../state";
import { User } from "@/@types/user";

export type Getters = {
  getUserInfo(state: State): User | undefined;
  getToken(state: State): string | undefined;
};

export const getters: GetterTree<State, State> & Getters = {
  getUserInfo(state) {
    return state.account?.user;
  },
  getToken(state) {
    return state.account?.token;
  }
};
