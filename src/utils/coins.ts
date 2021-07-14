import { AGE_COIN_DURATION, COINS_OF_DAY } from "@/constants";
import moment from "moment";
import { ref } from "vue";
import { useStore } from "@/store";
import {
  GetDailyCoins,
  GetEndDay,
  GetNowTime,
  GetRemainingCoins,
  GetSpentCoins,
  GetStatus,
  GetTotalCoins,
  RefreshDailyCoins
} from "./@types/coins";
import { ageCoinFormat } from "./formats";
import { MutationType } from "@/@enums/mutations";

const getSeconds = () => new Date().getSeconds();

export const getDailyCoins: GetDailyCoins = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const dailyCoins = ref<number>(COINS_OF_DAY - (hour * 60 + minute));
  setTimeout(() => {
    dailyCoins.value = dailyCoins.value - 1;
    setInterval(() => {
      dailyCoins.value = dailyCoins.value - 1;
    }, AGE_COIN_DURATION);
  }, (60 - getSeconds()) * 1000);

  return dailyCoins;
};

export const refreshDailyCoins: RefreshDailyCoins = () => {
  const store = useStore();
  const refreshCoins = () => {
    const { dailyCoins, activeTask } = store.state;
    if (dailyCoins) {
      if (activeTask && activeTask.coins) {
        store.commit(MutationType.SetDailyCoins, {
          remainingCoins: dailyCoins?.remainingCoins - 60,
          wastedCoins: dailyCoins?.wastedCoins,
          savedCoins: dailyCoins?.savedCoins + 60
        });
        store.commit(MutationType.UpdateTask, {
          activeTask,
          coins: activeTask?.coins + 60
        });
      } else {
        store.commit(MutationType.SetDailyCoins, {
          remainingCoins: dailyCoins?.remainingCoins - 60,
          wastedCoins: dailyCoins?.wastedCoins + 60,
          savedCoins: dailyCoins?.savedCoins
        });
      }
    }
  };
  setTimeout(() => {
    refreshCoins();
    setInterval(() => {
      refreshCoins();
    }, AGE_COIN_DURATION);
  }, (60 - getSeconds()) * 1000);
};

const getEndDay: GetEndDay = (birthday, maxAge) => {
  const endDay = moment(birthday)
    .add(maxAge, "years")
    .valueOf();

  return endDay;
};

const getNowTime: GetNowTime = () => {
  const now = new Date().getTime();

  return now;
};

export const getSpentCoins: GetSpentCoins = birthday => {
  if (!birthday) {
    return ref<number>(0);
  }
  const calculateSpentCoins = () => ageCoinFormat(getNowTime() - startDay);
  const startDay = new Date(birthday).getTime();
  const spentCoins = ref<number>(calculateSpentCoins());

  setTimeout(() => {
    spentCoins.value = calculateSpentCoins();
    setInterval(() => {
      spentCoins.value = calculateSpentCoins();
    }, AGE_COIN_DURATION);
  }, (60 - getSeconds()) * 1000);

  return spentCoins;
};

export const getRemainingCoins: GetRemainingCoins = (birthday, maxAge) => {
  if (!birthday || !maxAge) {
    return ref<number>(0);
  }
  const calculateRemainingCoins = () =>
    getTotalCoins(birthday, maxAge) - getSpentCoins(birthday).value;

  const remainingCoins = ref<number>(calculateRemainingCoins());

  setTimeout(() => {
    remainingCoins.value = calculateRemainingCoins();
    setInterval(() => {
      remainingCoins.value = calculateRemainingCoins();
    }, AGE_COIN_DURATION);
  }, (60 - getSeconds()) * 1000);

  return remainingCoins;
};

export const getTotalCoins: GetTotalCoins = (birthday, maxAge) => {
  if (!birthday || !maxAge) {
    return 0;
  }
  const startDay = new Date(birthday).getTime();
  const endDay = getEndDay(birthday, maxAge);

  return ageCoinFormat(endDay - startDay);
};

export const getStatus: GetStatus = (birthday, maxAge) => {
  return {
    spentCoins: birthday ? getSpentCoins(birthday) : ref(0),
    remainingCoins:
      birthday && maxAge ? getRemainingCoins(birthday, maxAge) : ref(0),
    totalCoins: birthday && maxAge ? getTotalCoins(birthday, maxAge) : 0
  };
};
