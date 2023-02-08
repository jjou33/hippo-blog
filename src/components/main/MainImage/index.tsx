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
  }, [window.innerHeight, window.innerWidth])

  return (
    <S.MainAnimationContainer>
      <S.MainImageTextWrapper totalHeight={totalHeight} totalWidth={totalWidth}>
        <S.MainImageStaticText>Welcome to HippoDev</S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>I AM {currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
      <S.MainImage backgroundImage={imagePath['mainImage4']}>
        {/* <S.MainImageItem
          srcSet={imagePath['mainTitle_resize'].fluid.srcSet}
          sizes="(max-width: 200px) 180px,
            (max-width: 400px) 250px,
            (max-width: 764px) 450px,
            (max-width: 1600px) 1500px,
            (max-width: 2000px) 1800px
            2500px"
          height="300px"
        /> */}
      </S.MainImage>
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
