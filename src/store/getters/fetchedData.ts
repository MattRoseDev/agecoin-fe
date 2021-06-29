import type { GetterTree } from "vuex";
import type { State } from "../state";

export type FetchedDataGettersType = {
  isTasksDataFetched(state: State): boolean;
};

export const fetchedDataGetters: GetterTree<State, State> & FetchedDataGettersType = {
  isTasksDataFetched(state: State) {
    return state.fetchedData.tasks
  },
}
