export type Task = {
  id: string;
  title: string;
  description?: string;
  defaultCoins: number;
  coins?: number;
  status?: number;
  active?: boolean;
};
