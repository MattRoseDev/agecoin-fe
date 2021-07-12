import { Account } from "@/@types/account";
import { FetchedData } from "@/@types/fetchedData";
import { Theme } from "@/@types/theme";
import { fetchedData } from "./fetchedData";
import { account } from "./account";
import { theme } from "./theme";
import { Task } from "@/@types/task";
import { DailyCoins } from "@/@types/dailyCoins";

interface State {
  account: Account;
  fetchedData: FetchedData;
  theme: Theme;
  tasks: Task[];
  dailyCoins?: DailyCoins;
  activeTask?: Task;
}

const state: State = {
  account,
  fetchedData,
  theme,
  tasks: []
};

export { state, State };
