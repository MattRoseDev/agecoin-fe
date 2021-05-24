import { Nullable } from ".";
import type { User } from "./user";

export type Account = {
  user?: Nullable<User>;
  token?: Nullable<string>;
  loggedIn: boolean;
};
