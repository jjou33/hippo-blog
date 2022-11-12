import NavTabItems from './NavTabItems'

import * as S from './Styles'

const NavigationTabMenu = () => {
  return (
    <S.NavTabMenuWrapper>
      <NavTabItems title="Home" href="http://localhost:8000" />
      <NavTabItems title="Github" href="https://github.com/jjou33" />
      <NavTabItems title="Profile" href="http://localhost:8080" />
    </S.NavTabMenuWrapper>
  )
}

export default NavigationTabMenu
