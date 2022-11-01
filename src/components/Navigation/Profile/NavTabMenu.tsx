import NavTabItems from './NavTabItems'
import * as Styled from './style/NavTabMenuStyled'

const NavigationTabMenu = () => {
  return (
    // <Styled.NavTabMenuContainer>
    <Styled.NavTabMenuWrapper>
      <NavTabItems title="Home" href="http://localhost:8000" />
      <NavTabItems title="Github" href="https://github.com/jjou33" />
      <NavTabItems title="Profile" href="http://localhost:8080" />
    </Styled.NavTabMenuWrapper>
    // </Styled.NavTabMenuContainer>
  )
}

export default NavigationTabMenu
