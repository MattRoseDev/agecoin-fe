import { MutationType } from "@/@enums/mutations";
import { useStore } from "@/store";
import { getSpentCoins, getRemainingCoins, getTotalCoins } from "@/utils/coins";
import {
  coinFormat,
  dateFormat,
  ageCoinFormat,
  numberFormat
} from "@/utils/formats";
import { reactive } from "vue";
import { List, UseProfile } from "../@types";

export default (): UseProfile => {
  const store = useStore();

  const spentCoins = getSpentCoins(store.getters.getUserBirthday);
  const remainingCoins = getRemainingCoins(
    store.getters.getUserBirthday,
    store.getters.getUserMaxAge
  );
  const totalCoins = getTotalCoins(
    store.getters.getUserBirthday,
    store.getters.getUserMaxAge
  );

  const personal: List = {
    title: "Personal",
    items: [
      {
        label: "Email",
        value: store.state.account.user?.email
      },
      {
        label: "Birthday",
        value: dateFormat(store.state.account.user?.birthday)
      }
    ]
  };

  const ageCoins: List = reactive({
    title: "Age Coins",
    items: [
      {
        label: "Max Age",
        value: store.state.account.user?.maxAge
      },
      {
        label: "Remaining Coins",
        value: remainingCoins,
        numberFormat: true
      },
      {
        label: "Total Coins",
        value: numberFormat(totalCoins)
      }
    ]
  });

  const toggleTheme = () => {
    store.commit(MutationType.ToggleTheme, undefined);
  };
  return {
    store,
    coinFormat,
    ageCoinFormat,
    numberFormat,
    dateFormat,
    spentCoins,
    personal,
    ageCoins,
    toggleTheme
  };
};
