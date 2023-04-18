import { useTheme } from './useTheme'
import { generateStorage } from 'utils/storage'
import { useSetRecoilState } from 'recoil'
import { darkModeSelector } from 'states/darkModeState'
export const useToggleTheme = () => {
  const theme = useTheme()
  const localStorage = generateStorage()
  const setThemeState = useSetRecoilState(darkModeSelector('theme'))

  const save = (value: 'light' | 'dark') => {
    localStorage.set('theme', value)
  }

  const toggle = () => {
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
