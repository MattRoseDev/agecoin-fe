import { Store, useStore } from "@/store";
import { CoinFormat, DateFormat } from "@/utils/@types/formats";
import { getSpentCoins, getRemainingCoins, getTotalCoins } from "@/utils/coins";
import { coinFormat, dateFormat } from "@/utils/formats";
import { Ref } from "vue";

type ListItem = {
  label: string;
  value: string | number | undefined;
};

type List = {
  title: string;
  items: ListItem[];
};

type UseProfile = {
  store: Store;
  coinFormat: CoinFormat;
  dateFormat: DateFormat;
  spentCoins: Ref<number>;
  personal: List;
  ageCoins: List;
};

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

  const ageCoins: List = {
    title: "Age Coins",
    items: [
      {
        label: "Max Age",
        value: store.state.account.user?.maxAge
      },
      {
        label: "Remaining Coins",
        value: coinFormat(remainingCoins.value)
      },
      {
        label: "Total Coins",
        value: coinFormat(totalCoins)
      }
    ]
  };

  return { store, coinFormat, dateFormat, spentCoins, personal, ageCoins };
};
