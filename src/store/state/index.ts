import { Account } from "@/@types/account";
import { FetchedData } from "@/@types/fetchedData";
import { Theme } from "@/@types/theme";
import { fetchedData } from "./fetchedData";
import { account } from "./account";
import { theme } from "./theme";
import { Task } from "@/@types/task";

interface State {
  account: Account;
  fetchedData: FetchedData;
  theme: Theme;
  tasks: Task[];
}

const state = {
  account,
  fetchedData,
  theme,
  tasks: []
};

export { state, State };
