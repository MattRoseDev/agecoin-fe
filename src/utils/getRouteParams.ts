import router from "@/router";

export const getRouteParamsByKey = (key: string) => {
  return router.currentRoute.value.params[key].toString();
};
