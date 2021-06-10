import type { GetterTree } from "vuex";
import type { State } from "../state";
import { AccountGettersType, accountGetters } from "./account";

export type Getters = AccountGettersType

export const getters: GetterTree<State, State> & Getters = {
  ...accountGetters
};
