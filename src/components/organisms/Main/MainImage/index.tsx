import React from 'react'
import MainImageText from 'components/molecules/MainImageText'
import ImageComponent from 'components/atom/ImageComponent'
import CirCleNavigator from 'components/atom/CircleNavigator'
import * as S from './styles'

const MainImage = () => {
  return (
    <S.MainAnimationContainer>
      <S.MainImageWrapper>
        <S.ImageWrapper>
          <ImageComponent src="./static/gifs/computer.gif" />
        </S.ImageWrapper>
      </S.MainImageWrapper>
      <MainImageText />
      <CirCleNavigator />
    </S.MainAnimationContainer>
  )
}

export default MainImage
