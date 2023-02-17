import NavTabItems from './NavTabItems'

import * as S from './styles'

const NavigationTabMenu = () => {
  return (
    <S.NavTabMenuWrapper>
      <NavTabItems title="Home" href="/" />
      <NavTabItems title="Github" href="https://github.com/jjou33" />
      {/* <NavTabItems title="Email" href="" /> */}
    </S.NavTabMenuWrapper>
  )
}

export default NavigationTabMenu
