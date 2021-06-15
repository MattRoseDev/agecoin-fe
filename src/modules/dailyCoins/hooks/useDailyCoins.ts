import { Ref, ref, watch } from "vue";
import { COINS_OF_DAY } from "@/constants";
import { getDailyCoins } from "@/utils/coins";
import { numberFormat } from "@/utils/formats";
import { NumberFormat } from "@/utils/@types/formats";

type UseDailyCoins = {
  dailyCoins: Ref<number>;
  savedDailyCoins: number;
  wastedDailyCoins: Ref<number>;
  numberFormat: NumberFormat;
};

export default (): UseDailyCoins => {
  const dailyCoins = getDailyCoins();
  const savedDailyCoins = 0;
  const wastedDailyCoins = ref(
    COINS_OF_DAY - savedDailyCoins - dailyCoins.value
  );

  watch(dailyCoins, function() {
    wastedDailyCoins.value = COINS_OF_DAY - savedDailyCoins - dailyCoins.value;
  });

  return { dailyCoins, savedDailyCoins, wastedDailyCoins, numberFormat };
};
