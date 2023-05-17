import { getSvgJSXElement } from 'utils/imageBridge'

import IconWrapper from 'components/atom/IconWrapper'
import * as S from './styles'

interface NavTabPropsType {
  title: string
  href: string
}

const NavigationTabMenu = ({ title, href }: NavTabPropsType) => {
  return (
    <S.NavTabMenuItemContainer>
      <S.NavTabMenuItemWrapper href={href} target="_blank">
        <IconWrapper iconName={title} iconSize={25} />
      </S.NavTabMenuItemWrapper>
    </S.NavTabMenuItemContainer>
  )
}

export default NavigationTabMenu
