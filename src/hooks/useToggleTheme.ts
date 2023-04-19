import { useTheme } from './useTheme'
import { generateStorage } from 'utils/storage'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { darkModeSelector } from 'states/darkModeState'
export const useToggleTheme = () => {
  const theme = useTheme()
  const localStorage = generateStorage()
  const setThemeState = useSetRecoilState(darkModeSelector('theme'))

  const temp = useRecoilValue(darkModeSelector('all'))

  const save = (value: 'light' | 'dark') => {
    localStorage.set('theme', value)
  }

  const toggle = () => {
    setThemeState('fok')
    console.log(temp)
    if (!theme) return

    if (theme === 'dark') {
      setThemeState('light')
      save('light')
    } else {
      setThemeState('dark')
      save('dark')
    }
  }

  return [theme, toggle] as const
}
