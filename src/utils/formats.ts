import { AGE_COIN } from "@/constants";
import moment from "moment";
import {
  AgeCoinFormat,
  CoinFormat,
  DateFormat,
  NumberFormat
} from "./@types/formats";

export const numberFormat: NumberFormat = value => {
  return Intl.NumberFormat().format(value);
};

export const ageCoinFormat: AgeCoinFormat = value => {
  return Math.floor(value / AGE_COIN);
};

export const coinFormat: CoinFormat = value => {
  return numberFormat(ageCoinFormat(value));
};

export const dateFormat: DateFormat = date => {
  return moment(date).format("MMM DD YYYY");
};
