import { useRecoilValue } from 'recoil'
import { darkModeSelector, DarkModeState } from 'states/darkModeState'

export const useTheme = () => {
  const darkModeState: DarkModeState = useRecoilValue(
    darkModeSelector('all'),
  ) as DarkModeState

  const theme = (() => {
    if (darkModeState.systemTheme === 'not-ready') return 'light'
    if (darkModeState.theme !== 'default') return darkModeState.theme
    return darkModeState.systemTheme
  })()

  return theme
}
