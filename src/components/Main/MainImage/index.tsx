import React, { useEffect, useState } from 'react'
import { useTypingTitle } from 'hooks/useTypingTitle'
import WaveImageAnimation from './WaveImageAnimation'
import { getMainImageIconSvgElement } from 'utils/Common/Common'
import StarAnimation from '../../Common/Animations/StarAnimation/StarAnimation'
import { navTabMenuIconSet } from 'assets/Svg/MainImageIconSet'

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

  return (
    <S.MainAnimationContainer>
      {/* <StarAnimation /> */}

      <S.MainImageTextWrapper>
        <S.MainImageStaticText>Welcome to HippoDev</S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>{currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
      <S.MainImage backgroundImage={imagePath.mainImage7} />

      <S.MainImageWrapper>
        <S.MainImageIconWrapper
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        >
          <S.MainImageHtmlIcon
            totalHeight={totalHeight}
            totalWidth={totalWidth}
          >
            {navTabMenuIconSet['Html'].icon(
              `${totalHeight * 0.15}`,
              `${totalHeight * 0.15}`,
            )}
          </S.MainImageHtmlIcon>
          <S.MainImageVueIcon totalHeight={totalHeight} totalWidth={totalWidth}>
            {navTabMenuIconSet['Vue'].icon(
              `${totalHeight * 0.15}`,
              `${totalHeight * 0.15}`,
            )}
          </S.MainImageVueIcon>
          <S.MainImageReactIcon
            totalHeight={totalHeight}
            totalWidth={totalWidth}
          >
            {navTabMenuIconSet['React'].icon(
              `${totalHeight * 0.15}`,
              `${totalHeight * 0.15}`,
            )}
          </S.MainImageReactIcon>
          <S.MainImageJavscriptIcon
            totalHeight={totalHeight}
            totalWidth={totalWidth}
          >
            {navTabMenuIconSet['Javascript'].icon(
              `${totalHeight * 0.15}`,
              `${totalHeight * 0.15}`,
            )}
          </S.MainImageJavscriptIcon>
        </S.MainImageIconWrapper>
        <WaveImageAnimation
          imagePath={imagePath}
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        />
      </S.MainImageWrapper>
    </S.MainAnimationContainer>
  )
}

export default MainImage
