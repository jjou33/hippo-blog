import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'

import * as Styled from './style/HeaderStyled'

const Header = () => {
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const iconRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const scroll = useScrollStateBar()

  const headerWidth = headerRef.current?.clientWidth as number
  const iconWidth = iconRef.current?.clientWidth as number

  const xScroll = (headerWidth - iconWidth) * 1

  return (
    <Styled.HeaderContainer ref={headerRef}>
      <Styled.IconWrapper>
        <Styled.Icon ref={iconRef} scroll={xScroll * scroll}>
          {navIconSet['Rocket'].icon('15', '15')}
        </Styled.Icon>
      </Styled.IconWrapper>
    </Styled.HeaderContainer>
  )
}

export default Header
