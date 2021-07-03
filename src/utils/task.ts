import { Task } from "@/@types/task";
import { DeactiveAllTasks, MoveActiveTaskToFirstItem } from "./@types/task";

export const moveActiveTaskToFirstItem: MoveActiveTaskToFirstItem = tasks => {
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

export const deactiveAllTasks: DeactiveAllTasks = tasks => {
  if (!tasks || !tasks.length) {
    return [];
  }

  return tasks.map(task => ({
    ...task,
    active: false
  }));
};
