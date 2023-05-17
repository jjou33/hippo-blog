import * as S from './styles'

import LinkedIcon from 'components/atom/LinkedIcon'

const NavTabMenuBox = () => {
  return (
    <S.NavTabMenuContainer>
      <LinkedIcon title="Home" href="/" iconSize={25} />
      <LinkedIcon
        title="Github"
        href="https://github.com/jjou33"
        iconSize={25}
      />
    </S.NavTabMenuContainer>
  )
}

export default NavTabMenuBox
