import { numberFormat } from "@/utils/formats";
import { useQuery } from "@vue/apollo-composable";
import { GET_DAILY_COINS } from "@/graphql/user";
import { UseDailyCoins } from "../@types";
import { useStore } from "@/store";
import { ActionType } from "@/@enums/actions";
import { refreshDailyCoins } from "@/utils/coins";

export default (): UseDailyCoins => {
  const store = useStore();

  if (!store.getters.isDailyCoinsDataFetched) {
    const { onResult, stop } = useQuery(GET_DAILY_COINS, {
      timezoneOffset: new Date().getTimezoneOffset()
    });

    onResult(result => {
      if (result.data) {
        const {
          data: { getDailyCoins }
        } = result;
        store.dispatch(ActionType.HandleDailyCoins, getDailyCoins);
        stop();
      }
    });

    refreshDailyCoins();
  }

  return { store, numberFormat };
};
