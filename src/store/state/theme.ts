import { Theme } from "@/@types/theme";

export const theme: Theme =
  JSON.parse(localStorage.getItem("theme") || "null") || "light";
