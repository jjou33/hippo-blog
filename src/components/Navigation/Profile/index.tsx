import React, { useRef } from 'react'
import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'

import * as S from './styles'

interface IntroductionProps {
  profileImage: string
  roketImage: string
}

const Introduction = ({ profileImage, roketImage }: IntroductionProps) => {
  return (
    <S.IntroductionContainer>
      <S.IntroductionWrapper>
        <ProfileImage profileImage={profileImage} roketImage={roketImage} />
        <S.SubTitle>Hippo's Dev</S.SubTitle>
        <NavTabMenu />
      </S.IntroductionWrapper>
    </S.IntroductionContainer>
  )
}

export default Introduction
