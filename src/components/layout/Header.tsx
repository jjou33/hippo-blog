import React, { useEffect, useState } from 'react'
import ColorText from 'components/common/TextEffect'

import { getSvgJSXElement } from 'utils/imageBridge'
import { useScrollState } from 'hooks/useScrollState'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useToggleTheme } from 'hooks/useToggleTheme'
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

          <S.ToggleBackground>
            <DarkModeSwitch
              style={{ marginBottom: '0' }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={50}
              sunColor="orange"
              moonColor="yellow"
            />
          </S.ToggleBackground>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header
