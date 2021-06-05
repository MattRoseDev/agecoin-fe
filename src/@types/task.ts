import { Nullable } from ".";

export type Task = {
  id: string;
  title: string;
  description?: Nullable<string>;
  defaultCoins: number;
};
