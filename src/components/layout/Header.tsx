import React, { useState } from 'react'
import ColorText from 'components/common/TextEffect'

import { useScrollState } from 'hooks/useScrollState'
import { getSvgJSXElement } from 'utils/imageBridge'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useToggleTheme } from 'hooks/useToggleTheme'
import { useTheme } from 'hooks/useTheme'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import * as S from './styles'

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(true)
  const setState = useSetRecoilState(menuOpenState)
  const scroll = useScrollStateBar()
  const hideState = useScrollState()
  const { toggle } = useToggleTheme()
  const toggleMenuButton = () => {
    setState((oldOpenState: boolean) => {
      return !oldOpenState
    })
  }
  console.log('isDarkMode : ', isDarkMode)
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    toggle()
  }

  return (
    <>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer>
      <S.HeaderContainer isHide={hideState}>
        <S.HeaderMenuButton onClick={toggleMenuButton}>
          {getSvgJSXElement('menu', '40')}
        </S.HeaderMenuButton>
        <S.HeaderWrapper>
          <S.HeaderItemTitle to="/">
            <ColorText text="HIPPO DEV"></ColorText>
          </S.HeaderItemTitle>

          <DarkModeSwitch
            style={{}}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
            sunColor="orange"
            moonColor="yellow"
          />
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header
