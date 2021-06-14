import { ref, watch } from "vue";
import { COINS_OF_DAY } from "@/constants";
import { getStatus } from "@/utils/coins";
import { numberFormat } from "@/utils/formats";

export default () => {
  const { dailyCoins } = getStatus();
  const savedDailyCoins = 0;
  const wastedDailyCoins = ref(
    COINS_OF_DAY - savedDailyCoins - dailyCoins.value
  );

  watch(dailyCoins, function() {
    wastedDailyCoins.value = COINS_OF_DAY - savedDailyCoins - dailyCoins.value;
  });

  return { dailyCoins, savedDailyCoins, wastedDailyCoins, numberFormat };
};
