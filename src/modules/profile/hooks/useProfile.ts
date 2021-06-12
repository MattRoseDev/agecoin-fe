import { useStore } from "@/store";
import { getStatus } from "@/utils/coins";
import { coinFormat, dateFormat } from "@/utils/formats";

export default () => {
  const store = useStore();
  const { spentCoins, remainingCoins, totalCoins } = getStatus();

  const personal = {
    title: "Personal",
    items: [
      {
        label: "Email",
        value: store.state.account.user?.email
      },
      {
        label: "Birthday",
        value: dateFormat(store.state.account.user?.birthday || "")
      }
    ]
  };
  const ageCoins = {
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
