import { Store } from "@/store";
import {
  DateFormat,
  AgeCoinFormat,
  CoinFormat,
  NumberFormat
} from "@/utils/@types/formats";
import { Ref } from "vue";

export type ListItem = {
  label: string;
  value: string | number | undefined | Ref<number | string | undefined>;
  numberFormat?: boolean;
};

export type List = {
  title: string;
  items: ListItem[];
};

export type UseProfile = {
  store: Store;
  coinFormat: CoinFormat;
  ageCoinFormat: AgeCoinFormat;
  numberFormat: NumberFormat;
  dateFormat: DateFormat;
  spentCoins: Ref<number>;
  personal: List;
  ageCoins: List;
  toggleTheme: () => void;
};
