import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'
import { upDownAnimation } from 'styles/AnimationKeyframes'
const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  top: 0;
  z-index: 999;
  background: white;

  h1 {
    color: black;
  }
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 90px;
`

interface ScrollStateIconType {
  scroll: number
}
const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  margin-top: 60px;
  ${(props: ScrollStateIconType) =>
    props.scroll !== undefined
      ? css`
          transform: translateX(${props.scroll}px);
        `
      : ''};
`

const IconWrapper = styled.div`
  animation: ${upDownAnimation} 0.6s infinite ease-in-out alternate;
`

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
