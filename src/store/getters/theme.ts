import type { GetterTree } from "vuex";
import type { State } from "../state";

export type ThemeGettersType = {
   isThemeDark(state: State): boolean | undefined;
};

export const themeGetters: GetterTree<State, State> & ThemeGettersType = {
  isThemeDark(state: State) {
    return state.theme == 'dark' 
  },
}
