import type { GetterTree } from "vuex";
import type { State } from "../state";
import { AccountGettersType, accountGetters } from "./account";
import { FetchedDataGettersType, fetchedDataGetters} from "./fetchedData";
import { ThemeGettersType, themeGetters} from "./theme";

export type GetterTreeState = GetterTree<State, State>

export type AccountGetterTree = GetterTreeState & AccountGettersType 
export type FetchedDataGetterTree = GetterTreeState & FetchedDataGettersType
export type ThemeGetterTree = GetterTreeState & ThemeGettersType

export type Getters = AccountGetterTree | FetchedDataGetterTree | ThemeGetterTree

export const getters: Getters = {
  ...accountGetters,
  ...fetchedDataGetters,
  ...themeGetters
};
