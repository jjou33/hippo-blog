import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'

import * as S from './styles'

const Header = () => {
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const iconRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const scroll = useScrollStateBar()

  const headerWidth = headerRef.current?.clientWidth as number
  const iconWidth = iconRef.current?.clientWidth as number

  const xScroll = (headerWidth - iconWidth) * 1

  return <S.HeaderContainer ref={headerRef}></S.HeaderContainer>
}

export default Header
