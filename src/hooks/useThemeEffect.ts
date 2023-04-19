import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { darkMode, darkModeSelector } from 'states/darkModeState'
export const useThemeEffect = () => {
  const theme = useRecoilValue(darkModeSelector('theme'))
  const theme1 = useRecoilValue(darkModeSelector('systemTheme'))
  const systemPrefersDarkState = useSetRecoilState(
    darkModeSelector('systemTheme'),
  )
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    console.log(systemPrefersDark)

    systemPrefersDarkState(systemPrefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (theme !== 'default') {
      document.body.dataset.theme = theme
    }
  }, [theme])
}
