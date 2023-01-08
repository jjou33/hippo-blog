import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'

import * as S from './Styles'

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
    <S.HeaderContainer ref={headerRef}>
      {/* <S.IconWrapper>
        <S.Icon ref={iconRef} scroll={xScroll * scroll}>
          {navIconSet['Rocket'].icon('15', '15')}
        </S.Icon>
      </S.IconWrapper>
      <S.ProgressBarContainer>
        <S.ProgressBar scroll={scroll} />
      </S.ProgressBarContainer> */}
    </S.HeaderContainer>
  )
}

export default Header
