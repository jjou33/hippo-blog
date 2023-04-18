import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { darkMode, darkModeSelector } from 'states/darkModeState'
export const useThemeEffect = () => {
  const theme = useRecoilValue(darkModeSelector('theme'))
  const systemPrefersDarkState = useSetRecoilState(
    darkModeSelector('systemTheme'),
  )
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    systemPrefersDarkState(systemPrefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (theme !== 'default') {
      document.body.dataset.theme = theme
    }
  }, [theme])
}
