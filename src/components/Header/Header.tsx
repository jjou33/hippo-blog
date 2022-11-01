import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'
import { HeaderContainer, Icon, IconWrapper } from './style/HeaderStyled'

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
    <HeaderContainer ref={headerRef}>
      <IconWrapper>
        <Icon ref={iconRef} scroll={xScroll * scroll}>
          {navIconSet['Car'].icon('30', '30')}
        </Icon>
      </IconWrapper>
    </HeaderContainer>
  )
}

export default Header
