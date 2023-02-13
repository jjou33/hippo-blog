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
const typedList = ['FRONT DEVELOPER', 'HAPPY', 'PASSION', 'ENJOY']

const MainImage = ({ imagePath }: MainImageProps) => {
  const currentTitle = useTypingTitle(typedList)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [totalWidth, setTotalWidth] = useState<number>(0)

  useEffect(() => {
    setTotalHeight(window.innerHeight)
    setTotalWidth(window.innerWidth)

    const changeSize = () => {
      setTotalHeight(window.innerHeight)
      setTotalWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeSize)
  }, [])

  return (
    <S.MainAnimationContainer>
      <S.MainImageTextWrapper totalHeight={totalHeight} totalWidth={totalWidth}>
        <S.MainImageStaticText>Welcome to HippoDev</S.MainImageStaticText>
        <br />
        {/* <S.MainImageDynamicText>I AM {currentTitle}</S.MainImageDynamicText> */}
      </S.MainImageTextWrapper>
      {/* <S.MainImage backgroundImage="/static/gifs/test1.gif"></S.MainImage> */}
      <S.MainImage src="/static/gifs/test4.gif" />
      <ScrollIndicator />
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
