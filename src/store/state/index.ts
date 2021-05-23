import { Account } from "@/@types/account";
import { account } from "./account";

interface State {
  account: Account;
}

const state = {
  account
};

export { state, State };
