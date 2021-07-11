import { MutationTree } from "vuex";
import { State } from "../state";
import { accountMutations, AccountMutationsType } from "./account";
import { tasksMutations, TasksMutationsType } from "./tasks";
import { dailyCoinsMutations, DailyCoinsMutationsType } from "./dailyCoins";
import { themeMutations, ThemeMutationsType } from "./theme";

export type MutationTreeState = MutationTree<State>;

export type AccountMutationTree = MutationTreeState & AccountMutationsType;
export type TasksMutationTree = MutationTreeState & TasksMutationsType;
export type DailyCoinsMutationTree = MutationTreeState &
  DailyCoinsMutationsType;
export type ThemeMutationTree = MutationTreeState & ThemeMutationsType;

export type Mutations =
  | AccountMutationTree
  | TasksMutationTree
  | DailyCoinsMutationTree
  | ThemeMutationTree;

export const mutations: Mutations = {
  ...accountMutations,
  ...tasksMutations,
  ...dailyCoinsMutations,
  ...themeMutations
};
