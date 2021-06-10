import { Nullable } from ".";
import { Task } from "./task";

export type User = {
  id: string;
  fullname: string;
  username: string;
  theme: "light" | "dark";
  role: "ADMIN" | "USER";
  birthday: string;
  maxAge: number;
  tasks?: Nullable<Task[]>;
};
