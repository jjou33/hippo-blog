import React, { useEffect, useState } from 'react'
import { useTypingTitle } from 'hooks/useTypingTitle'
import WaveImageAnimation from './WaveImageAnimation'
import ScrollIndicator from 'components/common/ScrollIndicator/ArrowIndicator'

import * as S from './styles'

interface MainImageProps {
  imagePath: {
    [key: string]: string
  }
}
const typedList = ['FRONT DEVELOPER', 'STUDY', 'PASSION', 'ENJOY']

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
      <S.MainImageTextWrapper totalHeight={totalHeight}>
        <S.MainImageStaticText>Welcome to HippoDev</S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>{currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
      <S.MainImage backgroundImage={imagePath['mainImage10']} />
      <ScrollIndicator totalHeight={totalHeight} />
      <S.MainImageWrapper>
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
