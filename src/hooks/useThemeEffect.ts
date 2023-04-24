import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { generateStorage } from 'utils/storage'
import { darkModeSelector } from 'states/darkModeState'
export const useThemeEffect = () => {
  const theme = useRecoilValue(darkModeSelector('theme'))
  const localStorage = generateStorage()
  const systemPrefersDarkValue = useRecoilValue(darkModeSelector('systemTheme'))
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
      document.body.dataset.theme = theme as string
    } else {
      if (localStorage.get('theme')) {
        document.body.dataset.theme = localStorage.get('theme')
      }
    }
  }, [theme, systemPrefersDarkValue])
}
