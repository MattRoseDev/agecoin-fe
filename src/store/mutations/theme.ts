import { MutationType } from '@/@enums/mutations'
import type { State } from '../state'

export type ThemeMutationsType = {
  [MutationType.ToggleTheme](state: State): void;
}

export const themeMutations: ThemeMutationsType = {
  [MutationType.ToggleTheme](state: State) {
      if(state.theme === 'light') {
        document.querySelector("html")?.classList.add("dark");
      } else {
        document.querySelector("html")?.classList.remove("dark");
      }
      const theme = state.theme === 'light' ? 'dark' : 'light'
      state.theme = theme
      localStorage.setItem("theme", `"${theme}"`)
      
   },
};
