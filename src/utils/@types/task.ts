import { Task } from "@/@types/task";

export type MoveActiveTaskToFirstItem = (tasks: Task[]) => Task[];
export type DeactiveAllTasks = (tasks: Task[]) => Task[];
