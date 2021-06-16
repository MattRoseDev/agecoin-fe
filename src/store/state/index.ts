import { Account } from "@/@types/account";
import { FetchedData } from "@/@types/fetchedData";
import { account } from "./account";
import { fetchedData } from "./fetchedData";

interface State {
  account: Account;
  fetchedData: FetchedData;
}

const state = {
  account,
  fetchedData
};

export { state, State };
