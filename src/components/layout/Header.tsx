import React from 'react'
import ColorText from 'components/common/TextEffect'

import { getSvgJSXElement } from 'utils/imageBridge'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useToggleTheme } from 'hooks/useToggleTheme'
import * as S from './styles'

const Header = () => {
  const setState = useSetRecoilState(menuOpenState)
  const scroll = useScrollStateBar()

  const toggleMenuButton = () => {
    setState((oldOpenState: boolean) => {
      return !oldOpenState
    })
  }

  return (
    <>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer>
      <S.HeaderContainer>
        <S.HeaderMenuButton onClick={toggleMenuButton}>
          {getSvgJSXElement('menu', '40')}
        </S.HeaderMenuButton>
        <S.HeaderWrapper>
          <S.HeaderItemTitle to="/">
            <ColorText text="HIPPO DEV"></ColorText>
          </S.HeaderItemTitle>
          <S.ThemeButton>ToggleButton</S.ThemeButton>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header
