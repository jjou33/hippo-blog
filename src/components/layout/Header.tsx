import { useScrollStateBar } from 'hooks/useScrollStateBar'
import { useRef, MutableRefObject } from 'react'
import { navIconSet } from 'assets/Svg/NavIconSet'

import * as S from './Styles'

export interface HeaderPropsType {
  backgroundImg: string
}
const Header = (props: HeaderPropsType) => {
  const headerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const iconRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  const scroll = useScrollStateBar()

  const headerWidth = headerRef.current?.clientWidth as number
  const iconWidth = iconRef.current?.clientWidth as number

  const xScroll = (headerWidth - iconWidth) * 1

  return (
    <S.HeaderContainer ref={headerRef} backgroundImg={props.backgroundImg}>
      <S.HeaderBackgroundImg>
        <S.IconWrapper>
          <S.Icon ref={iconRef} scroll={xScroll * scroll}>
            {navIconSet['Rocket'].icon('15', '15')}
          </S.Icon>
        </S.IconWrapper>
      </S.HeaderBackgroundImg>
    </S.HeaderContainer>
  )
}

export default Header
