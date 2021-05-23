import { ActionType } from "@/@enums/actions";
import { MutationType } from "@/@enums/mutations";
import { Account } from "@/@types/account";
import { ActionTree } from "vuex";
import type { ActionAugments, Actions } from ".";
import { State } from "../state";

export type AccountType = {
  [ActionType.Login](context: ActionAugments, account: Omit<Account, 'loggedIn'>): void;
};

const account: ActionTree<State, State> & Actions = {
  async [ActionType.Login]({ commit }, { token, user }: Omit<Account, 'loggedIn'>) {
    if(token && user) {
      commit(MutationType.SetToken, token)
      commit(MutationType.SetUser, user)
      commit(MutationType.SetLoggedIn, true)
    }
  }
}

export default account
