import { atom, selectorFamily } from 'recoil'

export type DarkModeState = {
  theme: 'dark' | 'light' | 'default'
  systemTheme: 'dark' | 'light' | 'not-ready'
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
    field =>
    ({ get }) => {
      if (field === 'all') {
        return get(darkMode)
      } else {
        return get(darkMode)[field]
      }
    },
  set:
    field =>
    ({ set }, newValue) =>
      set(darkMode, prevState => ({ ...prevState, [field]: newValue })),
})
