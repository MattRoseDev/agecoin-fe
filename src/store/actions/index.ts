import { ActionContext } from "vuex";
import { Mutations } from "../mutations";
import { State } from "../state";
import { accountActions, AccountActionsType } from "./account";

export type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = AccountActionsType;

export const actions = {
  ...accountActions
};
