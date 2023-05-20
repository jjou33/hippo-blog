import * as S from './styles'

import React from 'react'
import DarkModeSwitcher from 'components/atom/DarkModeSwitcher'
import IconWrapper from 'components/atom/IconWrapper'
import ColorText from 'components/atom/ColorText'
import ScrollBar from 'components/atom/ScrollBar'

import { useScrollState } from 'hooks/useScrollState'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'

const Header = () => {
  const setState = useSetRecoilState(menuOpenState)
  const hideState = useScrollState()
  const toggleMenuButton = () => {
    setState((oldOpenState: boolean) => {
      return !oldOpenState
    })
  }

  return (
    <>
      <ScrollBar />
      <S.HeaderContainer isHide={hideState}>
        <S.HeaderMenuButton onClick={toggleMenuButton}>
          <IconWrapper iconName="menu" iconSize={40} />
        </S.HeaderMenuButton>
        <S.HeaderWrapper>
          <S.HeaderItemTitle to="/">
            <ColorText text="HIPPO DEV" />
          </S.HeaderItemTitle>
          <DarkModeSwitcher />
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header
