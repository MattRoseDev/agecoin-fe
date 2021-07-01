import type { GetterTree } from "vuex";
import type { State } from "../state";
import { AccountGettersType, accountGetters } from "./account";
import { FetchedDataGettersType, fetchedDataGetters} from "./fetchedData";
import { TasksGettersType, tasksGetters} from "./tasks";
import { ThemeGettersType, themeGetters} from "./theme";

export type GetterTreeState = GetterTree<State, State>

export type AccountGetterTree = GetterTreeState & AccountGettersType 
export type FetchedDataGetterTree = GetterTreeState & FetchedDataGettersType
export type TasksGetterTree = GetterTreeState & TasksGettersType
export type ThemeGetterTree = GetterTreeState & ThemeGettersType

export type Getters = AccountGetterTree | FetchedDataGetterTree | ThemeGetterTree | TasksGetterTree

export const getters: Getters = {
  ...accountGetters,
  ...fetchedDataGetters,
  ...tasksGetters,
  ...themeGetters
};
