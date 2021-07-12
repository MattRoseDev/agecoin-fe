import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "../mutations";
import { State } from "../state";
import { accountActions, AccountActionsType } from "./account";
import { tasksActions, TasksActionsType } from "./tasks";
import { dailyCoinsActions, DailyCoinsActionsType } from "./dailyCoins";

export type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

type ActionTreeState = ActionTree<State, State>;

type AccountActions = AccountActionsType & ActionTreeState;
type TasksActions = TasksActionsType & ActionTreeState;
type DailyCoinsActions = DailyCoinsActionsType & ActionTreeState;

export type Actions = AccountActions | TasksActions | DailyCoinsActions;

export const actions: Actions = {
  ...accountActions,
  ...tasksActions,
  ...dailyCoinsActions
};
