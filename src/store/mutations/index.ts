import { MutationTree } from "vuex";
import { State } from "../state";
import { accountMutations, AccountMutationsType } from "./account";
import { tasksMutations, TasksMutationsType } from "./tasks";
import { themeMutations, ThemeMutationsType } from "./theme";

export type MutationTreeState = MutationTree<State>;

export type AccountMutationTree = MutationTreeState & AccountMutationsType;
export type TasksMutationTree = MutationTreeState & TasksMutationsType;
export type ThemeMutationTree = MutationTreeState & ThemeMutationsType;

export type Mutations =
  | AccountMutationTree
  | TasksMutationTree
  | ThemeMutationTree;

export const mutations: Mutations = {
  ...accountMutations,
  ...tasksMutations,
  ...themeMutations
};
