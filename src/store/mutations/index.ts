import { MutationTree } from "vuex";
import { State } from "../state";
import { accountMutations, AccountMutationsType } from "./account";

export type Mutations = AccountMutationsType;

export const mutations: MutationTree<State> & Mutations = {
  ...accountMutations
};
