import NavTabItems from './NavTabItems'
import {
  NavTabMenuContainer,
  NavTabMenuWrapper,
} from './style/NavTabMenuStyled'

const NavigationTabMenu = () => {
  return (
    <NavTabMenuContainer>
      <NavTabMenuWrapper>
        <NavTabItems title="Home" href="http://localhost:8000" />
        <NavTabItems title="Github" href="https://github.com/jjou33" />
        <NavTabItems title="Profile" href="http://localhost:8080" />
      </NavTabMenuWrapper>
    </NavTabMenuContainer>
  )
}

export default NavigationTabMenu
