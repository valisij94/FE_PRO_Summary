import { ACTION_CHANGE_THEME } from "./themeActions"

const THEMES = {
  light: 'light',
  dark: 'dark'
}

const initialState = {
  theme: THEMES.light
}

export const themesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_THEME : {
      let newThemeValue;
      if (state.theme === THEMES.light) {
        newThemeValue = THEMES.dark;
      }
      else {
        newThemeValue = THEMES.light;
      }
      return {
        theme: newThemeValue
      }
    }
    default: return state;
  }
}