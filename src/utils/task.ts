import { Task } from "@/@types/task";
import {
  DeactiveAllTasks,
  FormatTasks,
  MoveActiveTaskToTheFirst,
  MoveFinishedTasksToTheEnd
} from "./@types/task";

export const formatTasks: FormatTasks = tasks => {
  tasks = moveActiveTaskToTheFirst(tasks);
  tasks = moveFinishedTasksToTheEnd(tasks);

  return tasks;
};

export const moveActiveTaskToTheFirst: MoveActiveTaskToTheFirst = tasks => {
  if (!tasks || !tasks.length) {
    return [];
  }
  const activeTask = tasks.find(task => task.active);
  const otherTasks = tasks.filter(task => !task.active);
  const result: Task[] = [];

  if (activeTask) {
    result.push(activeTask);
  }

  result.push(...otherTasks);

  return result;
};

export const moveFinishedTasksToTheEnd: MoveFinishedTasksToTheEnd = tasks => {
  if (!tasks || !tasks.length) {
    return [];
  }
  const fininshedTasks = tasks.filter(task => task.status === 2);
  const otherTasks = tasks.filter(task => task.status !== 2);
  const result: Task[] = [];

  if (otherTasks) {
    result.push(...otherTasks);
  }

  if (fininshedTasks) {
    result.push(...fininshedTasks);
  }

  return result;
};

export const deactiveAllTasks: DeactiveAllTasks = tasks => {
  if (!tasks || !tasks.length) {
    return [];
  }

  return tasks.map(task => ({
    ...task,
    active: false
  }));
};
