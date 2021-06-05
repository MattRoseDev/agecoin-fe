import { Nullable } from ".";
import { Task } from "./task";

export type User = {
  id: string;
  fullname: string;
  username: string;
  role: "ADMIN" | "USER";
  birthday: string;
  maxAge: number;
  tasks?: Nullable<Task[]>;
};
