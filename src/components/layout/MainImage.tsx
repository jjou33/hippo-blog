import React from 'react'
import { useTypingTitle } from 'hooks/useTypingTitle'
import { getMainImageIconSvgElement } from 'utils/Common/Common'
import StarAnimation from '../Common/Animations/StarAnimation/StarAnimation'

import type { HeaderPropsType } from 'types/index'
import * as S from './Styles'

interface MainImageProps {
  imagePath: string[]
}
const typedList = ['Front Developer', 'Passion', 'HTML']

const MainImage = (props: MainImageProps) => {
  const currentTitle = useTypingTitle(typedList)
  console.log('imagePath : ', props.backgroundImg['mainImage2'])

  return (
    <S.MainAnimationContainer>
      <StarAnimation />
      <S.MainImageTextWrapper>
        <S.MainImageStaticText>Welcome to HippoDev 😎 </S.MainImageStaticText>
        <br />
        <S.MainImageDynamicText>{currentTitle}</S.MainImageDynamicText>
      </S.MainImageTextWrapper>
      {/* <S.MainImageWrapper>
        <S.MainImage src={props.backgroundImg.mainImage2} />
      </S.MainImageWrapper> */}
    </S.MainAnimationContainer>
  )
}

export default MainImage
