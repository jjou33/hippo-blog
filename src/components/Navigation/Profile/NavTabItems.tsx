import {
  NavTabMenuItemContainer,
  NavTabMenuItemIcon,
  NavTabMenuItemWrapper,
} from './style/NavTabItemsStyled'
import { getSvgJSXElement } from 'utils/Common/Common'

interface NavTabPropsType {
  title: string
  href: string
}

const NavigationTabMenu = ({ title, href }: NavTabPropsType) => {
  return (
    <NavTabMenuItemContainer>
      <NavTabMenuItemWrapper href={href} target="_blank">
        <NavTabMenuItemIcon>{getSvgJSXElement(title, '30')}</NavTabMenuItemIcon>
      </NavTabMenuItemWrapper>
    </NavTabMenuItemContainer>
  )
}

export default NavigationTabMenu
