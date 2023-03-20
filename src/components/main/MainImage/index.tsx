import React, { useState, useEffect } from 'react'
import * as S from './styles'

import Image from './MainImage'
import MouseScrollIndicator from 'components/common/ScrollIndicator/MouseIndicator'

import { useTypingTitle } from 'hooks/useTypingTitle'
import type { ImagePathPropsType } from 'types/image/index'

const typedList = [
  'JAVASCRIPT',
  'REACT',
  'VUE',
  'HTML',
  'CSS',
  'FRONT DEVELOPER',
]

const MainImage = ({ imagePath }: ImagePathPropsType) => {
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
      <S.MainImageTextWrapper totalHeight={totalHeight} totalWidth={totalWidth}>
        <S.MainImageStaticText>{'<HELLO MY WORLD />'}</S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        >
          {currentTitle}
        </S.MainImageDynamicText>
      </S.MainImageTextWrapper>

      <Image imagePath={imagePath} />
      <S.CircleDiv>
        <MouseScrollIndicator />
      </S.CircleDiv>
    </S.MainAnimationContainer>
  )
}

export default MainImage
