import router from "@/router";
import { GetRouteParamsByKey } from "./@types/getRouteParams";

export const getRouteParamsByKey: GetRouteParamsByKey = (key: string) => {
  return router.currentRoute.value.params[key].toString();
};
