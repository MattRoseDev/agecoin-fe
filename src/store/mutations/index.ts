import { MutationTree } from "vuex";
import { State } from "../state";
import { accountMutations, AccountMutationsType } from "./account";
import { themeMutations, ThemeMutationsType } from "./theme";

export type MutationTreeState = MutationTree<State>;
export type ThemeMutationTree = MutationTreeState & ThemeMutationsType;
export type AccountMutationTree = MutationTreeState & AccountMutationsType;
export type Mutations = AccountMutationTree | ThemeMutationTree;

export const mutations: Mutations = {
  ...accountMutations,
  ...themeMutations
};
