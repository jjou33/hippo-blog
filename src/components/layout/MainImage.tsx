import React, { useEffect, useState } from 'react'
import { useTypingTitle } from 'hooks/useTypingTitle'
import { getMainImageIconSvgElement } from 'utils/Common/Common'
import StarAnimation from '../Common/Animations/StarAnimation/StarAnimation'
import { navIconSet } from 'assets/Svg/NavIconSet'
import type { HeaderPropsType } from 'types/index'
import * as S from './Styles'

interface MainImageProps {
  imagePath: string[]
}
const typedList = ['DEVELOPER', 'STUDY', 'PASSION', 'ENJOY']

const MainImage = ({ imagePath }: MainImageProps) => {
  const currentTitle = useTypingTitle(typedList)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [totalWidth, setTotalWidth] = useState<number>(0)
  useEffect(() => {
    setTotalHeight(window.innerHeight)
    setTotalWidth(window.innerWidth)
    const changeTotalHeight = () => {
      setTotalHeight(window.innerHeight)
      setTotalWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeTotalHeight)
  }, [])

  console.log('nav : ', navIconSet)
  return (
    <S.MainAnimationContainer>
      {/* <StarAnimation /> */}

      <S.MainImageTextWrapper>
        <S.MainImageStaticText>Welcome to HippoDev 😎 </S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>{currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
      <S.MainImage backgroundImage={imagePath.mainImage5} />

      <S.MainImageWrapper>
        <S.ScrollIndicatorWrapper
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        >
          <S.ScrollIndicator />
        </S.ScrollIndicatorWrapper>

        <S.FooterFirstWaveAnimation>
          <S.BoatIcon totalHeight={totalHeight} totalWidth={totalWidth}>
            {navIconSet['Ship'].icon(
              `${totalHeight * 0.15}`,
              `${totalHeight * 0.15}`,
            )}
          </S.BoatIcon>
          <S.FooterWaveStyle
            src={imagePath['wave']}
            waveType="first"
            totalHeight={totalHeight}
          />
          <S.FooterWaveStyle
            src={imagePath['wave']}
            waveType="second"
            totalHeight={totalHeight}
          />
          <S.FooterWaveStyle
            src={imagePath['wave']}
            waveType="third"
            totalHeight={totalHeight}
          />
          <S.FooterWaveStyle
            src={imagePath['wave']}
            waveType="fourth"
            totalHeight={totalHeight}
          />
          <S.FooterWaveStyle
            src={imagePath['wave']}
            waveType="five"
            totalHeight={totalHeight}
          />
        </S.FooterFirstWaveAnimation>
      </S.MainImageWrapper>
    </S.MainAnimationContainer>
  )
}

export default MainImage
