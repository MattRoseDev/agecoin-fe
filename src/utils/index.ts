import { GetAuthorization, IsAuthenticated } from "./@types";

export const getAuthorization: GetAuthorization = () =>
  JSON.parse(localStorage.getItem("Authorization") || "null");

export const isAuthenticated: IsAuthenticated = () => !!getAuthorization();
