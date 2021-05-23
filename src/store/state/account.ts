import type { Account } from "@/@types/account";

const token = JSON.parse(localStorage.getItem("Authorization") || "null");

export const account: Account = {
  token,
  loggedIn: token ? true : false
};
