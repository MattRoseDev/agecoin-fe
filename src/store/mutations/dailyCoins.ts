import { MutationType } from '@/@enums/mutations'
import { DailyCoins } from '@/@types/dailyCoins';
import type { State } from '../state'

export type DailyCoinsMutationsType = {
  [MutationType.SetDailyCoins](state: State, dailyCoins: DailyCoins): void;
}

export const dailyCoinsMutations: DailyCoinsMutationsType = {
  [MutationType.SetDailyCoins](state: State, dailyCoins: DailyCoins) {
    state.dailyCoins = dailyCoins
  },
};
