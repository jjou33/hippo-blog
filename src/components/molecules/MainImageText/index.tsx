import React from 'react'
import StaticText from 'components/atom/StaticText'
import DynamicText from 'components/atom/DynamicText'

import * as S from './styles'

const typedList = ['JAVASCRIPT', 'REACT', 'VUE', 'HTML', 'CSS']

const MainImageText = () => {
  return (
    <S.MainImageTextWrapper>
      <StaticText
        text="Be the Free!"
        fontFamily="MontserratAlternates"
        fontColor="white"
      />
      <br />
      Do It
      <DynamicText typedList={typedList} fontFamily="MontserratAlternates" />
      <S.CommentTextWrapper>
        <StaticText text="오늘 하루도 수고했어!" fontWeight={300} />
      </S.CommentTextWrapper>
    </S.MainImageTextWrapper>
  )
}

export default MainImageText
