import React, { useRef } from 'react'
import ProfileImage from './ProfileImage'
import NavTabMenu from './NavTabMenu'

import * as Styled from './style/IntroductionStyled'

interface IntroductionProps {
  profileImage: string
  roketImage: string
}

const Introduction = ({ profileImage, roketImage }: IntroductionProps) => {
  return (
    <Styled.IntroductionContainer>
      <Styled.IntroductionWrapper>
        <ProfileImage profileImage={profileImage} roketImage={roketImage} />
        <Styled.SubTitle>Hippo's Dev</Styled.SubTitle>
        <NavTabMenu />
      </Styled.IntroductionWrapper>
    </Styled.IntroductionContainer>
  )
}

export default Introduction
