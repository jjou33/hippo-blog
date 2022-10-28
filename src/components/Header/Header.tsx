import ComputerModel from 'components/Common/ComputerGraphic'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'
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
const motion = keyframes`
  from{
    transform: translatey(2px);
  }
  to{
    transform: translatey(-2px);
  }
`

const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  transition: 0.2s;
  margin-top: 60px;
  ${props =>
    props !== ''
      ? css`
          transform: translateX(${props.scroll}px);
        `
      : css`
          transform: translateX(${props.scroll}px);
        `};
`

const IconWrapper = styled.div`
  animation: ${motion} 0.6s infinite ease-in-out alternate;
`

const Header = props => {
  const scroll = useScrollStateBar()
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const iconRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const headerWidth = headerRef.current?.clientWidth
  const middleHeight = (headerWidth / 2) * 1
  const iconWidth = iconRef.current?.clientWidth
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
