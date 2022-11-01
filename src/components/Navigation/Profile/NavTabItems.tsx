import * as Styled from './style/NavTabItemsStyled'
import { getSvgJSXElement } from 'utils/Common/Common'

interface NavTabPropsType {
  title: string
  href: string
}

const NavigationTabMenu = ({ title, href }: NavTabPropsType) => {
  return (
    <Styled.NavTabMenuItemContainer>
      <Styled.NavTabMenuItemWrapper href={href} target="_blank">
        <Styled.NavTabMenuItemIcon>
          {getSvgJSXElement(title, '20')}
        </Styled.NavTabMenuItemIcon>
      </Styled.NavTabMenuItemWrapper>
    </Styled.NavTabMenuItemContainer>
  )
}

export default NavigationTabMenu
