import { ActionType } from "@/@enums/actions";
import { MutationType } from "@/@enums/mutations";
import type { Account } from "@/@types/account";
import type { ActionAugments } from ".";

export type AccountActionsType = {
  [ActionType.Login](context: ActionAugments, account: Omit<Account, 'isAuthenticated'>): void;
  [ActionType.Logout](context: ActionAugments): void;
};

export const accountActions: AccountActionsType = {
  async [ActionType.Login]({ commit }:ActionAugments, { token, user }: Omit<Account, 'isAuthenticated'>) {
    if(token && user) {
      commit(MutationType.SetToken, token)
      commit(MutationType.SetUser, user)
      commit(MutationType.SetIsAuthenticated, true)
    }
  },
  async [ActionType.Logout]({ commit }:ActionAugments) {
    commit(MutationType.SetIsAuthenticated, false)
    commit(MutationType.ClearUser, undefined)
    commit(MutationType.ClearToken, undefined)
  }
}