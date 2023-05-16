import React from 'react'
import MainImageText from 'components/molecules/MainImageText'
import CirCleNavigator from 'components/atom/CircleNavigator'
import * as S from './styles'

const MainImage = () => {
  return (
    <S.MainAnimationContainer>
      <S.MainImageWrapper>
        <S.MainImage src="./static/gifs/computer.gif" />
      </S.MainImageWrapper>
      <MainImageText />
      <CirCleNavigator />
    </S.MainAnimationContainer>
  )
}

export default MainImage
