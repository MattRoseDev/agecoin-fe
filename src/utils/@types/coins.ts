import { Ref } from "vue";

export type GetDailyCoins = () => Ref<number>;
export type GetNowTime = () => number;
export type GetEndDay = (bithday: string, maxAge: number) => number;
export type GetSpentCoins = (bithday: string) => Ref<number>;
export type GetRemainingCoins = (
  bithday: string,
  maxAge: number
) => Ref<number>;
export type GetTotalCoins = (bithday: string, maxAge: number) => number;
export type ExtractDate = (
  bithday: string
) => { day: number; month: number; year: number };
export type GetStatus = () => {
  dailyCoins: Ref<number>;
  spentCoins: Ref<number>;
  remainingCoins: Ref<number>;
  totalCoins: number;
};
