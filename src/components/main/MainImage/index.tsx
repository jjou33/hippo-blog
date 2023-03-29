import React, { useState, useEffect } from 'react'
import * as S from './styles'

import Image from './MainImage'
import MouseScrollIndicator from 'components/common/ScrollIndicator/MouseIndicator'

import { useTypingTitle } from 'hooks/useTypingTitle'
import type { ImagePathPropsType } from 'types/image/index'

const typedList = ['JAVASCRIPT', 'REACT', 'VUE', 'HTML', 'CSS']

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
      <S.MainImageWrapper>
        <S.MainImage src="./static/gifs/computer.gif" />
      </S.MainImageWrapper>
      <S.MainImageTextWrapper totalHeight={totalHeight} totalWidth={totalWidth}>
        <S.MainImageStaticText>{'Be the Free!'}</S.MainImageStaticText>
        <br />
        Do It
        <S.MainImageDynamicText
          totalHeight={totalHeight}
          totalWidth={totalWidth}
        >
          {` ${currentTitle}`}
        </S.MainImageDynamicText>
        <S.CommentTextWrapper>오늘 하루도 수고했어!</S.CommentTextWrapper>
      </S.MainImageTextWrapper>

      <S.CircleDiv>
        <MouseScrollIndicator />
      </S.CircleDiv>
    </S.MainAnimationContainer>
  )
}

export default MainImage
