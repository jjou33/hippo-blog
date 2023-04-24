import { atom, selectorFamily } from 'recoil'

export type DarkModeFieldState = 'theme' | 'systemTheme' | 'all'

export interface DarkModeState {
  theme: string
  systemTheme: string
}

const defaultState: DarkModeState = {
  theme: 'default',
  systemTheme: 'not-ready',
}
export const darkMode = atom({
  key: 'darkMode',
  default: defaultState,
})

export const darkModeSelector = selectorFamily({
  key: 'darkModeSelector',
  get:
    (field: DarkModeFieldState) =>
    ({ get }) => {
      if (field === 'all') {
        return get(darkMode)
      } else {
        return get(darkMode)[field]
      }
    },
  set:
    (field: DarkModeFieldState) =>
    ({ set }, newValue) =>
      set(darkMode, prevState => ({ ...prevState, [field]: newValue })),
})
