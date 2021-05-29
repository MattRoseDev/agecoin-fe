import type { Account } from "@/@types/account";

const token = JSON.parse(localStorage.getItem("Authorization") || "null");

export const account: Account = {
  token,
  isAuthenticated: token ? true : false
};
