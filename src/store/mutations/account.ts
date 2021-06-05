import { MutationType } from '@/@enums/mutations'
import type { State } from '../state'
import type { User } from '@/@types/user'
import { Task } from '@/@types/task';

export type AccountType = {
  [MutationType.SetUser](state: State, user: User): void;
  [MutationType.ClearUser](state: State): void;
  [MutationType.SetToken](state: State, token: string): void;
  [MutationType.ClearToken](state: State): void;
  [MutationType.SetIsAuthenticated](state: State, isAuthenticated: boolean): void;
  [MutationType.SetTasks](state: State, Tasks: Task[]): void;
}

export default  {
  [MutationType.SetUser](state: State, user: User) {
    state.account = {
      ...state.account,
      user
    }
   },
  [MutationType.ClearUser](state: State) {
    state.account = {
      ...state.account,
      user: null
    }
   },
  [MutationType.SetToken](state: State, token: string) {
    localStorage.setItem('Authorization', JSON.stringify(token))
    state.account = {
      ...state.account,
      token
    }
   },
  [MutationType.ClearToken](state: State) {
    localStorage.removeItem('Authorization')
    state.account = {
      ...state.account,
      token: null
    }
   },
  [MutationType.SetIsAuthenticated](state: State, isAuthenticated: boolean) {
    state.account.isAuthenticated = isAuthenticated
   },
  [MutationType.SetTasks](state: State, tasks: Task[]) {
    if(state.account.user) {
      state.account.user = {
        ...state.account?.user, 
        tasks
      }
    }
   },
};
