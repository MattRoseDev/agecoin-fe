import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "../mutations";
import { State } from "../state";
import account, { AccountType } from "./account";

export type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = AccountType;

export const actions = {
  ...account
};
