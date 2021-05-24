import { ActionType } from "@/@enums/actions";
import { MutationType } from "@/@enums/mutations";
import type { Account } from "@/@types/account";
import type { ActionTree } from "vuex";
import type { ActionAugments, Actions } from ".";
import type { State } from "../state";

export type AccountType = {
  [ActionType.Login](context: ActionAugments, account: Omit<Account, 'loggedIn'>): void;
  [ActionType.Logout](context: ActionAugments): void;
};

const account: ActionTree<State, State> & Actions = {
  async [ActionType.Login]({ commit }, { token, user }: Omit<Account, 'loggedIn'>) {
    if(token && user) {
      commit(MutationType.SetToken, token)
      commit(MutationType.SetUser, user)
      commit(MutationType.SetLoggedIn, true)
    }
  },
  async [ActionType.Logout]({ commit }) {
    commit(MutationType.SetLoggedIn, false)
    commit(MutationType.ClearUser, undefined)
    commit(MutationType.ClearToken, undefined)
  }
}

export default account
