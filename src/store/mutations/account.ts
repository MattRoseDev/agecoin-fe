import { MutationType } from '@/@enums/mutations'
import type { State } from '../state'
import type { User } from '@/@types/user'


export type AccountType = {
  [MutationType.SetUser](state: State, user: User): void;
  [MutationType.SetToken](state: State, token: string): void;
  [MutationType.SetLoggedIn](state: State, loggedIn: boolean): void;
}

export default  {
  [MutationType.SetUser](state: State, user: User) {
    state.account = {
      ...state.account,
      user
    }
   },
  [MutationType.SetToken](state: State, token: string) {
    localStorage.setItem('Authorization', JSON.stringify(token))
    state.account = {
      ...state.account,
      token
    }
   },
  [MutationType.SetLoggedIn](state: State, loggedIn: boolean) {
    state.account.loggedIn = loggedIn
   },
};
