import { Account } from "@/@types/account";
import { FetchedData } from "@/@types/fetchedData";
import { Theme } from "@/@types/theme";
import { fetchedData } from "./fetchedData";
import { account } from "./account";
import { theme } from "./theme";

interface State {
  account: Account;
  fetchedData: FetchedData;
  theme: Theme;
}

const state = {
  account,
  fetchedData,
  theme
};

export { state, State };
