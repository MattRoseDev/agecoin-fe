import { AGE_COIN } from "@/constants";
import { ref } from "vue";
import { useStore } from "vuex";
import {
  ExtractDate,
  GetDailyCoins,
  GetEndDay,
  GetNowTime,
  GetRemainingCoins,
  GetSpentCoins,
  GetStatus,
  GetTotalCoins
} from "./@types/coins";

const getDailyCoins: GetDailyCoins = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const dailyCoins = ref<number>(1440 - (hour * 60 + minute));
  setTimeout(() => {
    dailyCoins.value = dailyCoins.value - 1;
    setInterval(() => {
      dailyCoins.value = dailyCoins.value - 1;
    }, 60 * 1000);
  }, (60 - sec) * 1000);

  return dailyCoins;
};

const extractDate: ExtractDate = birthday => {
  const day = new Date(birthday).getDate();
  const month = new Date(birthday).getMonth() + 1;
  const year = new Date(birthday).getFullYear();

  return { day, month, year };
};

const getEndDay: GetEndDay = (birthday, maxAge) => {
  const { day, month, year } = extractDate(birthday);
  const endDay = new Date(`${month}-$${day}-$${year + maxAge}`).getTime();

  return endDay;
};

const getNowTime: GetNowTime = () => {
  const now = new Date().getTime();

  return now;
};

const getSpentCoins: GetSpentCoins = birthday => {
  const startDay = new Date(birthday).getTime();
  const spentCoins = ref<number>(getNowTime() - startDay);

  setInterval(() => {
    spentCoins.value = getNowTime() - startDay;
  }, AGE_COIN);

  return spentCoins;
};

const getRemainingCoins: GetRemainingCoins = (birthday, maxAge) => {
  return ref<number>(getEndDay(birthday, maxAge) - getNowTime());
};

const getTotalCoins: GetTotalCoins = (birthday, maxAge) => {
  const { day, month, year } = extractDate(birthday);
  const startDay = new Date(birthday).getTime();
  const endDay = new Date(`${month}-$${day}-$${year + maxAge}`).getTime();

  return endDay - startDay;
};

export const getStatus: GetStatus = () => {
  const store = useStore();
  const { birthday, maxAge } = store?.state.account.user;

  return {
    dailyCoins: getDailyCoins(),
    spentCoins: getSpentCoins(birthday),
    remainingCoins: getRemainingCoins(birthday, maxAge),
    totalCoins: getTotalCoins(birthday, maxAge)
  };
};
