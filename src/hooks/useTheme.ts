import { useRecoilValue } from 'recoil'
import { darkModeSelector } from 'states/darkModeState'
export const useTheme = () => {
  const darkModeState = useRecoilValue<{ theme: string; systemTheme: string }>(
    darkModeSelector('all'),
  )

  const theme = (() => {
    if (darkModeState.systemTheme === 'not-ready') return 'light'
    if (darkModeState.theme !== 'default') return darkModeState.theme
    return darkModeState.systemTheme
  })()

  return theme
}
