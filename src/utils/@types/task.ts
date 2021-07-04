import { Task } from "@/@types/task";

export type FormatTasks = (tasks: Task[]) => Task[];
export type MoveActiveTaskToTheFirst = (tasks: Task[]) => Task[];
export type MoveFinishedTasksToTheEnd = (tasks: Task[]) => Task[];
export type DeactiveAllTasks = (tasks: Task[]) => Task[];
