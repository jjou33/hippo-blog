import React from 'react'
import ColorText from 'components/common/TextEffects/ColorText'
import { navIconSet } from 'assets/svg/NavIconSet'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'
import { useScrollStateBar } from 'hooks/useScrollStateBar'

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
          {navIconSet['menu'].icon('20', '20')}
        </S.HeaderMenuButton>
        <S.HeaderWrapper>
          <S.HeaderItemTitle to="/">
            <ColorText text="HIPPO DEV" fontSize={30}></ColorText>
          </S.HeaderItemTitle>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </>
  )
}

export default Header
