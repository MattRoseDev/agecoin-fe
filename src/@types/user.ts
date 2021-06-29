import { Task } from "./task";

export type User = {
  id: string;
  fullname: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  birthday: string;
  maxAge?: number;
  tasks?: Task[];
};
