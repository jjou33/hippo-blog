import { navIconSet } from 'assets/svg/NavIconSet'
import { menuOpenState } from 'states/menuOpenState'
import { useSetRecoilState } from 'recoil'

import * as S from './styles'

const Header = () => {
  const setState = useSetRecoilState(menuOpenState)
  const toggleMenuButton = () => {
    setState((oldOpenState: boolean) => {
      return !oldOpenState
    })
  }

  return (
    <S.HeaderContainer>
      <S.HeaderMenuButton onClick={toggleMenuButton}>
        {navIconSet['menu'].icon('20', '20')}
      </S.HeaderMenuButton>

      <S.HeaderWrapper>
        <S.HeaderItemTitle to="/">HIPPO DEV</S.HeaderItemTitle>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  )
}

export default Header
