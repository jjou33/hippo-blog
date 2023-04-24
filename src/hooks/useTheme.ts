import { useRecoilValue } from 'recoil'
import { darkModeSelector, DarkModeState } from 'states/darkModeState'

export const useTheme = () => {
  const darkModeState: DarkModeState = useRecoilValue(
    darkModeSelector('all'),
  ) as DarkModeState

  console.log('state : ', darkModeState)
  const theme = (() => {
    // console.log('sys : ', darkModeState.systemTheme)

    if (darkModeState.systemTheme === 'not-ready') return 'light'
    if (darkModeState.theme !== 'default') return darkModeState.theme
    return darkModeState.systemTheme
  })()

  return theme
}
