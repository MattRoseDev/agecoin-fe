import type { User } from "./user";

export type Account = {
  user?: User;
  token?: string;
  isAuthenticated: boolean;
};
