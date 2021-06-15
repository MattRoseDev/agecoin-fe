import { AGE_COIN, COINS_OF_DAY } from "@/constants";
import moment from "moment";
import { ref } from "vue";
import {
  GetDailyCoins,
  GetEndDay,
  GetNowTime,
  GetRemainingCoins,
  GetSpentCoins,
  GetStatus,
  GetTotalCoins
} from "./@types/coins";
import { ageCoinFormat } from "./formats";

const sec = new Date().getSeconds();

export const getDailyCoins: GetDailyCoins = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const dailyCoins = ref<number>(COINS_OF_DAY - (hour * 60 + minute));
  setTimeout(() => {
    dailyCoins.value = dailyCoins.value - 1;
    setInterval(() => {
      dailyCoins.value = dailyCoins.value - 1;
    }, AGE_COIN);
  }, (60 - sec) * 1000);

  return dailyCoins;
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
  const startDay = new Date(birthday).getTime();
  const spentCoins = ref<number>(ageCoinFormat(getNowTime() - startDay));

  setTimeout(() => {
    spentCoins.value = ageCoinFormat(getNowTime() - startDay);
    setInterval(() => {
      spentCoins.value = ageCoinFormat(getNowTime() - startDay);
    }, AGE_COIN);
  }, (60 - sec) * 1000);

  return spentCoins;
};

export const getRemainingCoins: GetRemainingCoins = (birthday, maxAge) => {
  if (!birthday || !maxAge) {
    return ref<number>(0);
  }
  const remainingCoins = ref<number>(
    ageCoinFormat(getEndDay(birthday, maxAge) - getNowTime())
  );

  setTimeout(() => {
    remainingCoins.value = remainingCoins.value - 1;
    setInterval(() => {
      remainingCoins.value = remainingCoins.value - 1;
    }, AGE_COIN);
  }, (60 - sec) * 1000);

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
