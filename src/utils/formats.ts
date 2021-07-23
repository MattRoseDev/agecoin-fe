import { AGE_COIN, SECOND_OF_MINUTE } from "@/constants";
import moment from "moment";
import {
  AgeCoinFormat,
  CoinFormat,
  ConvertSecToMin,
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
  if (!date) return "";

  return moment(date).format("MMM DD YYYY");
};

export const convertSecToMin: ConvertSecToMin = seconds => {
  if (!seconds) return 0;

  if (seconds < SECOND_OF_MINUTE) return 1;

  return Math.round(seconds / SECOND_OF_MINUTE);
};
