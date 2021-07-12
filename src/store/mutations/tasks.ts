import { MutationType } from '@/@enums/mutations'
import { Task } from '@/@types/task';
import { deactiveAllTasks, formatTasks  } from '@/utils/task';
import type { State } from '../state'

export type TasksMutationsType = {
  [MutationType.SetTasks](state: State, task: Task[]): void;
  [MutationType.AppendNewTask](state: State, task: Task): void;
  [MutationType.EditTask](state: State, task: Task): void;
  [MutationType.DeleteTask](state: State, taskId: Task['id']): void;
  [MutationType.StartTask](state: State, taskId: Task['id']): void;
  [MutationType.PauseTask](state: State, taskId: Task['id']): void;
  [MutationType.FinishTask](state: State, task: Task): void;
  [MutationType.ArchiveTask](state: State, task: Task): void;
}

export const tasksMutations: TasksMutationsType = {
  [MutationType.SetTasks](state: State, tasks: Task[]) {
    state.tasks = formatTasks(tasks)
    state.fetchedData.tasks = true
   },
  [MutationType.AppendNewTask](state: State, task: Task) {
    if(state.tasks.length) {
      if(!state.tasks.find(t => t.id == task.id)) {
        state.tasks = [task, ...state.tasks]
      }
    } else {
      state.tasks = [task]
    }
   },
  [MutationType.EditTask](state: State, task: Task) {
    const tasks = state.tasks.map(t => {
      if(t.id == task.id) {
        return task
      }
      return t 
    })
    state.tasks = tasks
   },
  [MutationType.DeleteTask](state: State, taskId: Task['id']) {
    const tasks = state.tasks.filter(t => {
      if(t.id == taskId) {
        return false
      }
      return t
    })
    state.tasks = tasks
  },
  [MutationType.StartTask](state: State, taskId: Task['id']) {
    state.tasks = deactiveAllTasks(state.tasks)
    const tasks = state.tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          status: 1,
          active: true
        }
      }
      return {
        ...task,
        active: false
      }
    })

    state.tasks = formatTasks(tasks)
  },
  [MutationType.PauseTask](state: State, taskId: Task['id']) {
    state.tasks = state.tasks.map(task => {
      if(task.id === taskId) {
        return  {
          ...task,
          active: false
        }
      }
      return task
    })
  },
  [MutationType.FinishTask](state: State, task: Task) {
    const tasks = state.tasks.map(t => {
      if(t.id === task.id) {
        return task 
      }
      return t 
    })

    state.tasks = formatTasks(tasks)
  },
  [MutationType.ArchiveTask](state: State, task: Task) {
    const tasks = state.tasks.filter(t => t.id !== task.id)

    state.tasks = formatTasks(tasks)
  },
};
