import type { GetterTree } from "vuex";
import type { State } from "../state";
import { AccountGettersType, accountGetters } from "./account";
import { FetchedDataGettersType, fetchedDataGetters} from "./fetchedData";

export type GetterTreeState = GetterTree<State, State>
export type FetchedDataGetterTree = GetterTreeState & FetchedDataGettersType
export type AccountGetterTree = GetterTreeState & AccountGettersType 
export type Getters = AccountGetterTree | FetchedDataGetterTree

export const getters: Getters = {
  ...accountGetters,
  ...fetchedDataGetters
};
