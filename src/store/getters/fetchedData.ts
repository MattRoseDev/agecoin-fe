import type { GetterTree } from "vuex";
import type { State } from "../state";

export type FetchedDataGettersType = {
  isTasksDataFetched(state: State): boolean;
  isDailyCoinsDataFetched(state: State): boolean;
};

export const fetchedDataGetters: GetterTree<State, State> & FetchedDataGettersType = {
  isTasksDataFetched(state: State) {
    return state.fetchedData.tasks
  },
  isDailyCoinsDataFetched(state: State) {
    return state.fetchedData.dailyCoins
  },
}
