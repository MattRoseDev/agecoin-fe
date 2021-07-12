import { ActionType } from "@/@enums/actions";
import { MutationType } from "@/@enums/mutations";
import { DailyCoins } from "@/@types/dailyCoins";
import { Task } from "@/@types/task";
import type { ActionAugments } from ".";

type DailyCoinsAndActiveTask = DailyCoins & {
  activeTask: Task
}

export type DailyCoinsActionsType = {
  [ActionType.HandleDailyCoins](context: ActionAugments, dailyCoinsAndActiveTask: DailyCoinsAndActiveTask): void;
};

export const dailyCoinsActions: DailyCoinsActionsType = {
  async [ActionType.HandleDailyCoins]({ commit }: ActionAugments, dailyCoinsAndActiveTask: DailyCoinsAndActiveTask) {
    if(dailyCoinsAndActiveTask) {
      commit(MutationType.SetDailyCoins, dailyCoinsAndActiveTask)
      commit(MutationType.SetActiveTask, dailyCoinsAndActiveTask.activeTask)
    }
  },
}