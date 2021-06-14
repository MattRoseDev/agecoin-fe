import { MutationType } from '@/@enums/mutations'
import type { State } from '../state'
import type { User } from '@/@types/user'
import { Task } from '@/@types/task';

export type AccountMutationsType = {
  [MutationType.SetUser](state: State, user: User): void;
  [MutationType.ClearUser](state: State): void;
  [MutationType.SetToken](state: State, token: string): void;
  [MutationType.ClearToken](state: State): void;
  [MutationType.SetIsAuthenticated](state: State, isAuthenticated: boolean): void;
  [MutationType.SetTasks](state: State, task: Task[]): void;
  [MutationType.AppendNewTask](state: State, task: Task): void;
  [MutationType.EditTask](state: State, task: Task): void;
  [MutationType.DeleteTask](state: State, taskId: Task['id']): void;
  [MutationType.ToggleTheme](state: State): void;
}

export const accountMutations: AccountMutationsType = {
  [MutationType.SetUser](state: State, user: User) {
    state.account = {
      ...state.account,
      user
    }
   },
  [MutationType.ClearUser](state: State) {
    state.account = {
      ...state.account,
      user: undefined 
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
      token: undefined
    }
   },
  [MutationType.SetIsAuthenticated](state: State, isAuthenticated: boolean) {
    state.account.isAuthenticated = isAuthenticated
   },
  [MutationType.SetTasks](state: State, tasks: Task[]) {
    if(state.account?.user) {
      state.account.user = {
        ...state.account?.user, 
        tasks
      }
    }
   },
  [MutationType.AppendNewTask](state: State, task: Task) {
    if(state.account?.user) {
      if(state.account?.user?.tasks?.length) {
        if(!state.account.user.tasks.find(t => t.id == task.id)) {
          state.account.user = {
            ...state.account?.user, 
            tasks: [task, ...state.account?.user?.tasks]
          }
        }
      } else {
        state.account.user = {
          ...state.account?.user, 
          tasks: [task]
        }
      }
    } 
   },
  [MutationType.EditTask](state: State, task: Task) {
    if(state.account?.user?.tasks) {
      const tasks = state.account.user.tasks.map(t => {
        if(t.id == task.id) {
          return task
        }
        return t 
      })
      state.account.user = {
        ...state.account?.user, 
        tasks
      }
    }
   },
  [MutationType.DeleteTask](state: State, taskId: Task['id']) {
    if(state.account?.user?.tasks) {
      const tasks = state.account.user.tasks.filter(t => {
        if(t.id == taskId) {
          return false
        }
        return t
      })
      state.account.user = {
        ...state.account?.user, 
        tasks
      }
    }
   },
  [MutationType.ToggleTheme](state: State) {
    if(state.account?.user) {
      state.account.user = { 
        ...state.account?.user, 
        theme: state.account?.user?.theme === 'light' ? 'dark' : 'light' 
      }
      if(state.account?.user?.theme === 'light') {
        document.querySelector("html")?.classList.add("dark");
      } else {
        document.querySelector("html")?.classList.remove("dark");
      }
    }
   },
};
