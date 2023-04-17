import { getSvgJSXElement } from 'utils/imageBridge'

import * as S from './styles'

interface NavTabPropsType {
  title: string
  href: string
}

const NavigationTabMenu = ({ title, href }: NavTabPropsType) => {
  return (
    <S.NavTabMenuItemContainer>
      <S.NavTabMenuItemWrapper href={href} target="_blank">
        <S.NavTabMenuItemIcon>
          {getSvgJSXElement(title, '20')}
        </S.NavTabMenuItemIcon>
      </S.NavTabMenuItemWrapper>
    </S.NavTabMenuItemContainer>
  )
}

export default NavigationTabMenu
