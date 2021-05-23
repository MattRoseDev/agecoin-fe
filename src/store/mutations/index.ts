import { MutationTree } from "vuex";
import { State } from "../state";
import account, { AccountType } from "./account";

export type Mutations = AccountType;

export const mutations: MutationTree<State> & Mutations = {
  ...account
};
