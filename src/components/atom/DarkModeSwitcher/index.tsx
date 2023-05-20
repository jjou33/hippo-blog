import React, { useEffect, useState } from 'react'

import { useSetRecoilState } from 'recoil'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useToggleTheme } from 'hooks/useToggleTheme'
import { generateStorage } from 'utils/storage'
import { darkModeSelector } from 'states/darkModeState'

const DarkModeSwitcher = () => {
  const { toggle } = useToggleTheme()
  const setThemeState = useSetRecoilState(darkModeSelector('theme'))

  const isDark = () =>
    generateStorage().get('theme') === 'dark' ? true : false
  const [isDarkMode, setDarkMode] = useState(isDark())

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    toggle()
  }

  useEffect(() => {
    setDarkMode(isDark())
    setThemeState(generateStorage().get('theme'))
  }, [])

  return (
    <DarkModeSwitch
      style={{}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
      sunColor="orange"
      moonColor="yellow"
    />
  )
}

export default DarkModeSwitcher
